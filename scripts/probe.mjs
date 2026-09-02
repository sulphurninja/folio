import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 1060 } });
await page.goto("http://localhost:3001/m/espey", { waitUntil: "networkidle" });
await page.waitForTimeout(3500);

const info = await page.evaluate(() => {
  const all = document.querySelectorAll(".mag-page");
  const out = { total: all.length, samples: [] };
  all.forEach((el, i) => {
    if (i > 40) return;
    const chain = [];
    let p = el.parentElement;
    while (p && chain.length < 4) {
      chain.push(p.className && typeof p.className === "string" ? p.className.slice(0, 40) : p.tagName);
      p = p.parentElement;
    }
    const cs = getComputedStyle(el);
    out.samples.push({
      i,
      cls: el.className,
      display: cs.display,
      h: cs.height,
      inline: (el.getAttribute("style") || "").slice(0, 120),
      chain: chain.join(" < "),
    });
  });
  return out;
});
console.log(JSON.stringify(info.samples.filter((s) => s.chain.includes("stf") || s.i < 3).slice(0, 8), null, 2), "total:", info.total);
await browser.close();
