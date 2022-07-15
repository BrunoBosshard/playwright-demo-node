const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

// Data-Driven Test
const urls = require('../data/urls.json');
for (const url of urls) {
  test(`check ${url}`, async ({ page }) => {
    await page.goto(url);
  })
}
