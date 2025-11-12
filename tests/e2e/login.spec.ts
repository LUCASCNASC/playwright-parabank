import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/LoginPage';

test('Login Successful', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickEnter();
});
