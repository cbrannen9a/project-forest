import puppeteer from "puppeteer";

const iterations = 20;

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

const urls = [
  "http://localhost:3000/example-1",
  "http://localhost:3000/example-2",
];

async function main() {
  for (let i = 0; i < iterations; i++) {
    console.log(`Iteration ${i + 1}`);
    await navigateToUrls(urls);
  }
}

main().catch((error) => {
  console.error(error);
});
