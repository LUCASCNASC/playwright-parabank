import { expect, Page } from '@playwright/test';
import users from '../tests/data/users.json';

export class LoginPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async fillUsername() {
    await page.locator('input[name="username"]').fill(users.validUser.username);
  }

   async fillPassword() {
    await page.locator('input[type="password"]').fill(users.validUser.password);
  }

   async ClickEnter() {
    await page.getByRole('button', { name: 'Log In' }).click();
        await expect(page.getByText('Balance includes deposits that may be subject to holds')).toBeVisible();
  }
}
