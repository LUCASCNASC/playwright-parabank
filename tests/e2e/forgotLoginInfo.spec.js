import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.streetAddress();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const ssn = faker.string.numeric(9);

test('Click onForgot Login Info', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Forgot login info?' }).click();
  await page.locator('#firstName').fill(firstName);
  await page.locator('#lastName').fill(lastName);
  await page.locator('[id="address.street"]').fill(address);
  await page.locator('[id="address.city"]').fill(city);
  await page.locator('[id="address.state"]').fill(state);
  await page.locator('[id="address.zipCode"]').fill(zipCode);
  await page.locator('#ssn').fill(ssn);
  await page.getByRole('button', { name: 'Find My Login Info' }).click();

  await expect(page.getByText('Customer Lookup')).toBeVisible();
  await expect(page.getByText('Your login information was')).toBeVisible();
  await expect(page.getByText('Username')).toBeVisible();
  await expect(page.getByText('Password')).toBeVisible();
});