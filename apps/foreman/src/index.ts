import puppeteer from "puppeteer";
import { iterations, urls } from "./constants";

async function navigateToUrls(urls: string[]) {
  const browser = await puppeteer.launch();

  for (const url of urls) {
    const page = await browser.newPage();
    await page.goto(url);
    // Wait for 5 seconds
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    await page.close();
  }

  await browser.close();
}

async function main() {
  for (let i = 0; i < iterations; i++) {
    console.log(`Iteration ${i + 1}`);
    await navigateToUrls(urls);
  }
}

main().catch((error) => {
  console.error(error);
});
