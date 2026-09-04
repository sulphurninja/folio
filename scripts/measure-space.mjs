import { chromium } from "playwright";

const slugs = ["judy", "bethany", "joan", "vineet", "espey", "kohila", "pallavi", "foskaris"];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

for (const slug of slugs) {
  await page.goto(`http://localhost:3001/m/${slug}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);
  // Flip through so clones have layout, then measure every pad page.
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(200);
  }
  const rows = await page.evaluate(() => {
    const pages = [...document.querySelectorAll(".stf__item.mag-page")];
    return pages.map((el, i) => {
      const prev = el.style.display;
      el.style.display = "block";
      const body = el.querySelector(".mag-body");
      if (!body) {
        el.style.display = prev;
        return null;
      }
      const kids = [...body.children];
      const foot = kids.findLast?.((k) => k.classList.contains("mag-foot") || k.classList.contains("mag-note") || k.classList.contains("mag-darkband"))
        || kids[kids.length - 1];
      const content = kids.filter((k) => k !== foot);
      const lastC = content[content.length - 1];
      const contentBottom = lastC ? lastC.offsetTop + lastC.offsetHeight : 0;
      const footTop = foot ? foot.offsetTop : 1120;
      const hole = Math.max(0, footTop - contentBottom);
      el.style.display = prev;
      return { i, hole, fill: body.classList.contains("mag-fill-page"), contentBottom, footTop };
    }).filter((r) => r && r.hole > 100);
  });
  console.log("\n" + slug, rows.length ? rows : "ok");
}
await browser.close();
