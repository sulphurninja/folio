import { chromium } from "playwright";
import { mkdirSync } from "fs";

const slugs = ["judy", "bethany", "joan", "vineet", "espey"];
mkdirSync("scripts/_audit", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

for (const slug of slugs) {
  await page.goto(`http://localhost:3001/m/${slug}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2800);
  await page.screenshot({ path: `scripts/_audit/${slug}-01.png` });
  for (let v = 2; v <= 9; v++) {
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(700);
    await page.screenshot({ path: `scripts/_audit/${slug}-${String(v).padStart(2, "0")}.png` });
  }
  console.log("done", slug);
}
await browser.close();
