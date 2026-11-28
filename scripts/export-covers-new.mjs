/**
 * Export the front cover of each issue as a JPEG, from its proof route.
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
  // The proof route loads the issue's own fonts; the reader's hidden copy may not.
  await page.goto(`${baseUrl}/m/${slug}/proof`, { waitUntil: "networkidle", timeout: 180000 });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll("nextjs-portal").forEach((el) => el.remove()));
  await page.waitForTimeout(900);
  mkdirSync(`${outDir}/${slug}`, { recursive: true });
  const dest = `${outDir}/${slug}/magcover.jpg`;
  await page.locator(".mag-page").first().screenshot({ path: dest, type: "jpeg", quality: 90 });
  console.log("saved", dest);
}

await browser.close();
