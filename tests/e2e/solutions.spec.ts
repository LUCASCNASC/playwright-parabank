import { test, expect } from '@playwright/test';

test('Acess Solutions Page', async ({ page }) => {
    await page.goto('/');
    await page.click('li.Solutions');
    await expect(page.getByText('ParaSoft Demo Website')).toBeVisible();
});