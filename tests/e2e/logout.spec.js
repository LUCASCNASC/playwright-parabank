import { test, expect } from '@playwright/test';
import users from '../data/users.json';

test('logout', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[name="username"]').fill(users.validUser.username);
  await page.locator('input[type="password"]').fill(users.validUser.password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Balance includes deposits that may be subject to holds')).toBeVisible();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page.getByText('Customer Login')).toBeVisible();
});