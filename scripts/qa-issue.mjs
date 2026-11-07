/**
 * Visual QA for one issue, run against its flat proof route.
 *
 *   node scripts/qa-issue.mjs <slug> [outDir] [leaf,leaf,...]
 *
 * Needs a dev server (PROOF_BASE, default http://127.0.0.1:3001). For every
 * .mag-page leaf it reports:
 *   crop    a photo whose frame crops it by more than 3% (frames must match
 *           the photograph's own ratio; the cover leaf is exempt)
 *   upscale a photo drawn more than 1.7x its pixel size (will look soft)
 *   empty   a horizontal band of the leaf, taller than 56px, with nothing in
 *           it: no text, no photo, no panel. Fill it.
 *   cut     text clipped by its box (overflow, or a column that spilled
 *           sideways) or running off the leaf
 * and screenshots each leaf to <outDir>/<slug>_NN.png when outDir is given.
 * Exit code 1 when anything is reported.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [slug, outDir, only] = process.argv.slice(2);
if (!slug) {
  console.error("usage: node scripts/qa-issue.mjs <slug> [outDir] [leaf,leaf]");
  process.exit(2);
}
const base = process.env.PROOF_BASE ?? "http://127.0.0.1:3001";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
await page.goto(`${base}/m/${slug}/proof`, { waitUntil: "networkidle", timeout: 300_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(700);
await page.evaluate(() => document.querySelectorAll("nextjs-portal").forEach((e) => e.remove()));

const report = await page.evaluate(() => {
  const transparent = (c) => !c || c === "transparent" || /rgba\([^)]*,\s*0\)$/.test(c);
  return [...document.querySelectorAll(".mag-page")].map((leaf, i) => {
    const out = [];
    const L = leaf.getBoundingClientRect();
    const rows = new Uint8Array(Math.ceil(L.height / 4) + 1);
    const C = 10, GW = Math.ceil(L.width / C), GH = Math.ceil(L.height / C);
    const grid = new Uint8Array(GW * GH);
    const mark = (r) => {
      if (r.width < 2 || r.height < 2) return;
      const a = Math.max(0, Math.floor((r.top - L.top) / 4));
      const b = Math.min(rows.length - 1, Math.ceil((r.bottom - L.top) / 4));
      for (let k = a; k <= b; k++) rows[k] = 1;
      const x0 = Math.max(0, Math.floor((r.left - L.left) / C)), x1 = Math.min(GW - 1, Math.floor((r.right - L.left - 0.01) / C));
      const y0 = Math.max(0, Math.floor((r.top - L.top) / C)), y1 = Math.min(GH - 1, Math.floor((r.bottom - L.top - 0.01) / C));
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) grid[y * GW + x] = 1;
    };

    // photos
    leaf.querySelectorAll("img").forEach((im) => {
      const r = im.getBoundingClientRect();
      if (!im.naturalWidth || r.width < 40) return;
      mark(r);
      const ics = getComputedStyle(im);
      const fit = ics.objectFit;
      const px = (k) => parseFloat(ics[k]) || 0;
      const cw = r.width - px("paddingLeft") - px("paddingRight") - px("borderLeftWidth") - px("borderRightWidth");
      const ch = r.height - px("paddingTop") - px("paddingBottom") - px("borderTopWidth") - px("borderBottomWidth");
      const na = im.naturalWidth / im.naturalHeight, ba = cw / ch;
      const crop = fit === "cover" || fit === "fill" ? 1 - Math.min(na / ba, ba / na) : 0;
      const name = im.getAttribute("src").split("/").pop();
      const decorative = im.getAttribute("alt") === "" && im.closest(".nv-back");
      if (i > 0 && !decorative && crop > 0.03 && r.width > 120) out.push(`crop ${Math.round(crop * 100)}% ${name}`);
      const scale = Math.max(r.width / im.naturalWidth, r.height / im.naturalHeight) * (fit === "cover" ? 1 : 1);
      if (scale > 1.7) out.push(`upscale ${scale.toFixed(1)}x ${name}`);
    });
    leaf.querySelectorAll("svg, canvas, video").forEach((el) => mark(el.getBoundingClientRect()));

    // panels: any element smaller than the leaf with a visible background
    leaf.querySelectorAll("*").forEach((el) => {
      if (el === leaf) return;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none") return;
      const r = el.getBoundingClientRect();
      if (r.width >= L.width - 1 && r.height >= L.height - 1) return; // full-leaf grounds don't count
      if (!transparent(cs.backgroundColor) || (cs.backgroundImage && cs.backgroundImage !== "none") ||
          parseFloat(cs.borderTopWidth) > 0 || parseFloat(cs.borderBottomWidth) > 0) {
        if (r.height <= 3) mark(r); // rules
        else if (!transparent(cs.backgroundColor) || cs.backgroundImage !== "none") mark(r);
      }
    });

    // text
    const walker = document.createTreeWalker(leaf, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      if (!n.textContent.trim()) continue;
      const pe = n.parentElement;
      if (pe.closest("svg")) continue; // decorative artwork may bleed on purpose
      const cs = getComputedStyle(pe);
      if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.12) continue;
      const rg = document.createRange();
      rg.selectNodeContents(n);
      let blk = pe;
      while (blk !== leaf && /^(inline|contents)/.test(getComputedStyle(blk).display)) blk = blk.parentElement;
      const br = blk.getBoundingClientRect();
      for (const r of rg.getClientRects()) {
        // a line of text fills its paragraph's measure: ragged right is not a hole
        mark({ left: br.left, right: br.right, top: r.top, bottom: r.bottom, width: br.width, height: r.height });
        if (r.bottom > L.bottom + 1 || r.right > L.right + 1 || r.left < L.left - 1) {
          out.push(`cut off-leaf "${n.textContent.trim().slice(0, 30)}"`);
          break;
        }
      }
    }

    // clipped boxes
    leaf.querySelectorAll("*").forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.overflow === "visible" && cs.overflowX === "visible" && cs.overflowY === "visible") return;
      if (!el.textContent.trim() || el.querySelector("img") && !el.querySelector("p")) return;
      const last = [...el.querySelectorAll("p, li, span, h1, h2, h3, h4")].pop();
      const b = el.getBoundingClientRect();
      if (last) {
        const l = last.getBoundingClientRect();
        if (l.right > b.right + 2 || l.bottom > b.bottom + 2) {
          out.push(`cut clipped .${(el.className && el.className.baseVal === undefined ? el.className : "").toString().split(" ")[0]}`);
        }
      }
    });

    // empty bands
    let run = 0, worst = 0, at = 0;
    for (let k = 0; k < rows.length; k++) {
      if (rows[k]) { run = 0; continue; }
      run += 4;
      if (run > worst) { worst = run; at = k * 4 - run; }
    }
    if (worst > 56) out.push(`empty ${worst}px band at y=${Math.max(0, at)}`);

    // empty boxes: the largest rectangle with nothing in it (catches a short
    // column or a bare rail even when the rest of that band is busy)
    const h = new Int32Array(GW);
    let best = { a: 0 };
    for (let y = 0; y < GH; y++) {
      for (let x = 0; x < GW; x++) h[x] = grid[y * GW + x] ? 0 : h[x] + 1;
      const st = [];
      for (let x = 0; x <= GW; x++) {
        const hx = x < GW ? h[x] : 0;
        let start = x;
        while (st.length && st[st.length - 1][1] >= hx) {
          const [sx, sh] = st.pop();
          const w = (x - sx) * C, hh = sh * C;
          if (w >= 150 && hh >= 110 && w * hh > best.a) best = { a: w * hh, w, hh, x: sx * C, y: (y - sh + 1) * C };
          start = sx;
        }
        st.push([start, hx]);
      }
    }
    if (best.a) out.push(`hole ${best.w}x${best.hh}px at x=${best.x} y=${best.y}`);

    return { i, out: [...new Set(out)] };
  });
});

if (outDir) {
  mkdirSync(outDir, { recursive: true });
  const want = only ? new Set(only.split(",").map(Number)) : null;
  const leaves = page.locator(".mag-page");
  const count = await leaves.count();
  for (let i = 0; i < count; i++) {
    if (want && !want.has(i)) continue;
    await leaves.nth(i).screenshot({ path: `${outDir}/${slug}_${String(i).padStart(2, "0")}.png` });
  }
}
await browser.close();

let bad = 0;
console.log(`${slug}: ${report.length} leaves${report.length % 2 ? "  (ODD leaf count!)" : ""}`);
for (const { i, out } of report) {
  if (!out.length) continue;
  bad++;
  console.log(`  ${String(i).padStart(2, "0")}: ${out.join(" | ")}`);
}
if (!bad) console.log("  clean");
process.exit(bad || report.length % 2 ? 1 : 0);
