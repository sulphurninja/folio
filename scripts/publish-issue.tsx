/**
 * Publish a crafted issue to the live site WITHOUT a deploy.
 *
 *   npx tsx --env-file=.env.local scripts/publish-issue.tsx <slug>
 *
 * Renders the issue's pages to static HTML, uploads its local photography
 * (public/issues/<slug>/*) to Cloudinary, rewrites the URLs, and upserts the
 * issue into MongoDB as a published HTML magazine. The production site serves
 * it immediately at /m/<slug> via the dynamic route.
 *
 * Prerequisites: the issue is registered in src/content/registry.tsx and its
 * OG card exists (python scripts/make-og.py <slug> "<title>" "<kicker>").
 */
import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import mongoose from "mongoose";
import { dbConnect } from "../src/lib/db";
import { Magazine } from "../src/models";
import { uploadBuffer, cloudinaryReady } from "../src/lib/cloudinary";
import { ISSUE_REGISTRY } from "../src/content/registry";

async function main() {
  const slug = process.argv[2];
  const issue = slug ? ISSUE_REGISTRY[slug] : null;
  if (!issue) {
    console.error(`Unknown slug "${slug}". Registered: ${Object.keys(ISSUE_REGISTRY).join(", ")}`);
    process.exit(1);
  }
  if (!cloudinaryReady()) {
    console.error("Cloudinary env vars missing (.env.local).");
    process.exit(1);
  }

  // 1. Render leaves to static HTML
  const html = renderToStaticMarkup(createElement(issue.Pages));
  const leaves = html.split(/(?=<article)/g).filter((s) => s.startsWith("<article"));
  if (leaves.length < 2 || leaves.length % 2 !== 0) {
    console.error(`Leaf count is ${leaves.length}; expected an even number ≥ 2.`);
    process.exit(1);
  }
  console.log(`Rendered ${leaves.length} leaves.`);

  // 2. Upload issue photography to Cloudinary and rewrite URLs
  const assetsDir = path.join(process.cwd(), "public", "issues", issue.slug);
  const files = fs.existsSync(assetsDir)
    ? fs.readdirSync(assetsDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    : [];
  const folder = `${process.env.CLOUDINARY_FOLDER || "folio"}/issues/${issue.slug}`;
  const urlMap = new Map<string, string>();
  for (const file of files) {
    const buffer = fs.readFileSync(path.join(assetsDir, file));
    const { url } = await uploadBuffer(buffer, { folder });
    urlMap.set(`/issues/${issue.slug}/${file}`, url);
    console.log(`Uploaded ${file} -> ${url}`);
  }

  const pagesHtml = leaves.map((leaf) => {
    let out = leaf;
    for (const [local, remote] of urlMap) out = out.split(local).join(remote);
    return out;
  });

  const coverImage = urlMap.get(`/issues/${issue.slug}/cover.jpg`) || "";
  const ogImage = urlMap.get(`/issues/${issue.slug}/og.jpg`) || coverImage;

  // 3. Upsert as a published HTML magazine
  await dbConnect();
  await Magazine.updateOne(
    { slug: issue.slug },
    {
      $set: {
        title: issue.title,
        slug: issue.slug,
        issueLabel: issue.kicker,
        description: issue.description,
        kind: "html",
        pagesHtml,
        toc: issue.toc,
        coverImage,
        ogImage,
        published: true,
      },
      $setOnInsert: { publishedAt: new Date() },
    },
    { upsert: true },
  );
  console.log(`✓ Published "${issue.title}" -> /m/${issue.slug} (${leaves.length} pages, live now)`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
