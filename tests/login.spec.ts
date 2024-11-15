const { webkit, firefox, chromium } = require("playwright");
const { test, expect, Browser, Page } = require("@playwright/test");

test("login test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });

  const page: Page = await browser.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const emailID = await page.locator("[name='email']");
  await emailID.fill("naveen@gmail.com");

  const password = await page.locator("[name='password']");
  await password.fill("naveen@123");

  const loginButton = await page.locator("input[value='Login']");
  await loginButton.click();

  const title = await page.title();
  console.log(title);

  await page.screenshot({ path: "example.png" });

  await browser.close();
});
