import { test, expect } from '@playwright/test';

test('Acessar Solutions', async ({ page }) => {
    await page.goto('/');
    await page.click('li.Solutions');
    await expect(page.getByText('ParaSoft Demo Website')).toBeVisible();
});