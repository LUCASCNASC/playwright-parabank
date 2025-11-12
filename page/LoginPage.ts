import { Page, expect } from '@playwright/test';
import users from '../tests/data/users.json';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername() {
    await this.page.locator('input[name="username"]').fill(users.validUser.username);
  }

  async fillPassword() {
    await this.page.locator('input[type="password"]').fill(users.validUser.password);
  }

  async clickEnter() {
    await this.page.getByRole('button', { name: 'Log In' }).click();
    await expect(this.page.getByText('Balance includes deposits that may be subject to holds')).toBeVisible();
  }
}