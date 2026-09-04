/**
 * Art-direction proof. Screenshots every leaf of an issue at the design
 * canvas, plus stitched spreads, so layout can be judged instead of guessed.
 *
 *   node scripts/proof.mjs vineet
 */
import { chromium } from "playwright";
import { mkdirSync, rmSync } from "node:fs";

const slug = process.argv[2] ?? "vineet";
const base = process.env.PROOF_BASE ?? "http://localhost:3001";
const out = `.proof/${slug}`;

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 1200 } });
page.on("console", (m) => {
  if (m.type() === "error") console.log("  console:", m.text());
});

await page.goto(`${base}/m/${slug}/proof`, { waitUntil: "networkidle", timeout: 90_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

/* Column fit report: negative = copy is clipped, positive = cream showing. */
const fit = await page.evaluate(() => {
  const rows = [];
  document.querySelectorAll(".mag-page").forEach((leaf, i) => {
    leaf.querySelectorAll(".pc-cols, .pc-ed-body").forEach((el) => {
      const box = el.getBoundingClientRect();
      const last = el.lastElementChild?.getBoundingClientRect();
      rows.push({
        leaf: i,
        cls: el.className.split(" ")[0],
        overflow: Math.round(el.scrollWidth - el.clientWidth),
        slack: last ? Math.round(box.bottom - last.bottom) : null,
      });
    });
  });
  return rows;
});
console.table(fit);

const leaves = await page.locator(".mag-page").all();
console.log(`${leaves.length} leaves`);

for (let i = 0; i < leaves.length; i++) {
  const n = String(i).padStart(2, "0");
  await leaves[i].screenshot({ path: `${out}/p${n}.png` });
}

/* Stitch facing pairs the way the reader sees them: 0 alone, then 1|2, 3|4 ... */
await page.addStyleTag({
  content: `
    body { margin: 0; background: #2a2a2a; }
    .mag-page { float: left; }
  `,
});

await browser.close();
console.log(`wrote ${out}`);
