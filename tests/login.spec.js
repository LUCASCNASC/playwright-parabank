import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[name="username"]').fill('Lucascnasc');
  await page.locator('input[name="password"]').fill('@Lcn123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://parabank.parasoft.com/parabank/login.htm');
});