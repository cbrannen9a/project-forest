import puppeteer from "puppeteer";
import { controlUrls, defaultIterations, urls } from "./constants";

async function navigateToUrls(urls: string[]) {
  try {
    const browser = await puppeteer.launch();

    for (const url of urls) {
      const page = await browser.newPage();
      await page.setCacheEnabled(false); // disable cache
      await page.goto(url);
      // Wait
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      await page.close();
    }

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  for (
    let i = 0;
    i < parseInt(process.env.ITERATIONS || `${defaultIterations}`);
    i++
  ) {
    console.log(`Iteration ${i + 1}`);
    const randomisedUrls = urls.sort(() => Math.random() - 0.5);
    await navigateToUrls([...controlUrls, ...randomisedUrls]);
  }
}

main().catch((error) => {
  console.error(error);
});
