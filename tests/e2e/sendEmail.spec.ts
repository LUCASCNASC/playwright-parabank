import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const phone = faker.phone.number();
const email = faker.internet.email();

test('Send New Email', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'contact', exact: true }).click();
  await page.locator('#name').fill(firstName);
  await page.locator('#email').fill(email);
  await page.locator('#phone').fill(phone);
  await page.locator('#message').fill('Enviando email teste.');
  await page.getByRole('button', { name: 'Send to Customer Care' }).click();
  await expect(page.getByText('A Customer Care')).toBeVisible();
});