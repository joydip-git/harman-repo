const { test, expect } = require("@playwright/test");
//import { test, expect } from "@playwright/test";

test.describe(
  'testing index',
  () => {

    test.beforeEach(
      async ({ page }) => {
        await page.goto('http://localhost:3001/')
      }
    )

    test(
      'testing index shows header or not',
      async ({ page }) => {
        // await page.waitForSelector('h1', { state: 'visible' })
        const h1 = await page.locator('h1')
        await expect(await h1.innerText()).toBe('Welcome to Playwright')
      }
    )
  }
)