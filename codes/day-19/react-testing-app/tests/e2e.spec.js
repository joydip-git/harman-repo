const { test, expect } = require("@playwright/test")

test.describe(
    'testing react app',
    () => {

        test.beforeEach(
            async ({ page }) => {
                await page.goto('http://localhost:3000')
            }
        )

        test(
            'app displays hello message',
            async ({ page }) => {
                const h1 = await page.locator('h1')
                const innerText = await h1.innerText()
                await expect(innerText).toBe('Hello, stranger')
            }
        )

        test(
            'app displays post',
            async ({ page }) => {
                const header = await page.locator('header')
                const innerText = await header.innerText()
                await expect(innerText).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            }
        )
    }
)