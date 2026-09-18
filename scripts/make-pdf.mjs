/**
 * Print an issue to PDF from its flat proof route.
 *
 *   node scripts/make-pdf.mjs vineet            one issue
 *   node scripts/make-pdf.mjs vineet judy ...   several
 *
 * Each .mag-page leaf is captured at 2x on the design canvas (840x1120) and
 * bound into public/pdf/<slug>.pdf (page size 630x840pt, i.e. the canvas at
 * 96dpi), so the reader's "Download PDF" button can serve it statically.
 * Every page is stamped with a diagonal DEMO watermark; the flipbook is clean.
 */
import { chromium } from "playwright";
import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("usage: node scripts/make-pdf.mjs <slug> [slug...]");
  process.exit(1);
}

const base = process.env.PROOF_BASE ?? "http://localhost:3001";
const outDir = join("public", "pdf");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

for (const slug of slugs) {
  const page = await browser.newPage({
    viewport: { width: 900, height: 1200 },
    deviceScaleFactor: 2,
  });

  console.log(`[${slug}] rendering ${base}/m/${slug}/proof`);
  await page.goto(`${base}/m/${slug}/proof`, { waitUntil: "networkidle", timeout: 120_000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(900);

  // The dev server pins the Next.js dev-tools badge to the bottom-left of the
  // viewport; being position:fixed it bleeds into leaf screenshots. Remove it
  // (and keep removing it, in case it re-mounts) before capturing.
  await page.evaluate(() => {
    const zap = () => document.querySelectorAll("nextjs-portal").forEach((el) => el.remove());
    zap();
    new MutationObserver(zap).observe(document.body, { childList: true });
  });

  const leaves = page.locator(".mag-page");
  const count = await leaves.count();
  if (!count) {
    console.error(`[${slug}] no .mag-page leaves found, skipping`);
    await page.close();
    continue;
  }

  const doc = await PDFDocument.create();
  doc.setTitle(`PrimeCrest — ${slug}`);
  doc.setProducer("PrimeCrest");
  const markFont = await doc.embedFont(StandardFonts.HelveticaBold);
  const mark = "DEMO";
  const markSize = 118;
  const markW = markFont.widthOfTextAtSize(mark, markSize);

  for (let i = 0; i < count; i++) {
    const leaf = leaves.nth(i);
    await leaf.scrollIntoViewIfNeeded();
    const shot = await leaf.screenshot({ type: "jpeg", quality: 90 });
    const img = await doc.embedJpg(shot);
    // 840x1120 css px at 96dpi -> 630x840 pt
    const pdfPage = doc.addPage([630, 840]);
    pdfPage.drawImage(img, { x: 0, y: 0, width: 630, height: 840 });
    // PDF-only stamp — never appears in the flipbook. Two passes so it
    // reads on both cream interiors and ink / cover plates.
    const angle = 32;
    const rad = (angle * Math.PI) / 180;
    const cx = 315;
    const cy = 420;
    const x = cx - (markW / 2) * Math.cos(rad) + (markSize / 3) * Math.sin(rad);
    const y = cy - (markW / 2) * Math.sin(rad) - (markSize / 3) * Math.cos(rad);
    for (const [color, opacity] of [
      [rgb(0.08, 0.08, 0.08), 0.26],
      [rgb(1, 1, 1), 0.2],
    ]) {
      pdfPage.drawText(mark, {
        x,
        y,
        size: markSize,
        font: markFont,
        color,
        opacity,
        rotate: degrees(angle),
      });
    }
    process.stdout.write(`\r[${slug}] leaf ${i + 1}/${count}`);
  }
  process.stdout.write("\n");

  const bytes = await doc.save();
  const file = join(outDir, `${slug}.pdf`);
  writeFileSync(file, bytes);
  console.log(`[${slug}] wrote ${file} (${(bytes.length / 1024 / 1024).toFixed(1)} MB, ${count} pages)`);
  await page.close();
}

await browser.close();
