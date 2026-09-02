import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 1060 } });
await page.goto("http://localhost:3001/m/espey", { waitUntil: "networkidle" });
await page.waitForTimeout(3500);
await page.screenshot({ path: "scripts/_v1.png" });
for (let v = 2; v <= 9; v++) {
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(1100);
  await page.screenshot({ path: `scripts/_v${v}.png` });
}
await browser.close();
console.log("done");
