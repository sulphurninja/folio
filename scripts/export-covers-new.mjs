/**
 * Export the front cover of each issue as a JPEG.
 * Usage: node scripts/export-covers-new.mjs <baseUrl> <outDir> <slug> [slug...]
 * Writes <outDir>/<slug>/magcover.jpg (900x1200 CSS px at 2x).
 */
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const [baseUrl, outDir, ...slugs] = process.argv.slice(2);
if (!baseUrl || !outDir || slugs.length === 0) {
  console.error("usage: node scripts/export-covers-new.mjs <baseUrl> <outDir> <slug...>");
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1200 }, deviceScaleFactor: 2 });

for (const slug of slugs) {
  await page.goto(`${baseUrl}/m/${slug}`, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".mag-page", { timeout: 60000 });
  await page.evaluate(async () => {
    const cover = document.querySelector(".invisible .mag-page");
    cover.id = "export-cover";
    Object.assign(cover.style, {
      position: "fixed",
      left: "0",
      top: "0",
      margin: "0",
      zIndex: "100000",
      visibility: "visible",
      transform: "none",
    });
    document.body.appendChild(cover);
    await Promise.all(
      [...cover.querySelectorAll("img")].map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(500);
  mkdirSync(`${outDir}/${slug}`, { recursive: true });
  const dest = `${outDir}/${slug}/magcover.jpg`;
  await page.locator("#export-cover").screenshot({ path: dest, type: "jpeg", quality: 90 });
  console.log("saved", dest);
}

await browser.close();
