import { test, expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.streetAddress();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phone = faker.phone.number();
const ssn = faker.string.numeric(9);
const username = faker.internet.username();
const password = faker.internet.password({ length: 10 });

export class NewUserPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickNewRegister() {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async clickConfirmRegister() {
    await this.page.getByRole('button', { name: 'Register' }).click();
    await expect(this.page.getByText('Your account was created')).toBeVisible();
  }

  async fillFirstName() {
    await this.page.locator('#customer\\.firstName').fill(firstName);
  }

  async fillLastName() {
    await this.page.locator('#customer\\.lastName').fill(lastName);
  }

  async fillAdress() {
    await this.page.locator('#customer\\.address\\.street').fill(address);
  }

  async fillCity() {
    await this.page.locator('#customer\\.address\\.city').fill(city);
  }

  async fillState() {
    await this.page.locator('#customer\\.address\\.state').fill(state);
  }

  async fillZipCode() {
    await this.page.locator('#customer\\.address\\.zipCode').fill(zipCode);
  }

  async fillPhone() {
    await this.page.locator('#customer\\.phoneNumber').fill(phone);
  }

  async fillSSN() {
    await this.page.locator('#customer\\.ssn').fill(ssn);
  }

  async fillUsername() {
    await this.page.locator('#customer\\.username').fill(username);
  }
}