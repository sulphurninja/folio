import { chromium } from "playwright";
import { mkdirSync } from "fs";

const slugs = ["espey", "joan", "nichole", "kohila", "pallavi"];
const outDir = "E:/Builds/editorial/public/issues";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 900, height: 1200 },
  deviceScaleFactor: 2,
});

for (const slug of slugs) {
  await page.goto(`http://localhost:3001/m/${slug}`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForSelector(".mag-page", { timeout: 30000 });
  await page.evaluate(async () => {
    const cover = document.querySelector(".invisible .mag-page");
    cover.id = "export-cover";
    cover.style.position = "fixed";
    cover.style.left = "0";
    cover.style.top = "0";
    cover.style.margin = "0";
    cover.style.zIndex = "100000";
    cover.style.visibility = "visible";
    cover.style.transform = "none";
    document.body.appendChild(cover);
    const imgs = [...cover.querySelectorAll("img")];
    await Promise.all(
      imgs.map(
        (img) =>
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
  await page.waitForTimeout(400);
  const dest = `${outDir}/${slug}/magcover.jpg`;
  mkdirSync(`${outDir}/${slug}`, { recursive: true });
  await page.locator("#export-cover").screenshot({
    path: dest,
    type: "jpeg",
    quality: 90,
  });
  console.log("saved", dest);
}

await browser.close();
