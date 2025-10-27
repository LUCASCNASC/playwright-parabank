import { test, expect } from '@playwright/test';

test('New User', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  const logo = page.locator('img[alt="ParaBank"]');
  await expect(logo).toBeVisible();
});
