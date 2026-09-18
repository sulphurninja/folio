/**
 * Screenshot every leaf of an issue's flat proof route.
 *
 *   node scripts/proof-shots.mjs <slug>
 *
 * Writes scripts/_<slug>_NN.png for visual review.
 */
import { chromium } from "playwright";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/proof-shots.mjs <slug>");
  process.exit(1);
}

const base = process.env.PROOF_BASE ?? "http://localhost:3001";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
await page.goto(`${base}/m/${slug}/proof`, { waitUntil: "networkidle", timeout: 120_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);

const leaves = page.locator(".mag-page");
const n = await leaves.count();
for (let i = 0; i < n; i++) {
  await leaves.nth(i).scrollIntoViewIfNeeded();
  await leaves.nth(i).screenshot({ path: `scripts/_${slug}_${String(i).padStart(2, "0")}.png` });
}
console.log(`leaves: ${n} -> scripts/_${slug}_NN.png`);
await browser.close();
