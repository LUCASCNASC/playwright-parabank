import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/LoginPage';
import { LogoutPage } from '../../page/LogoutPage';

test('Logout Sucessful', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await page.goto('/');
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickEnter();
  await logoutPage.clickLogout()
});