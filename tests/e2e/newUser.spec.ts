import { test, expect } from '@playwright/test';
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

test('Create New User', async ({ page }) => {
  
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('#customer\\.firstName').fill(firstName);
  await page.locator('#customer\\.lastName').fill(lastName);
  await page.locator('#customer\\.address\\.street').fill(address);
  await page.locator('#customer\\.address\\.city').fill(city);
  await page.locator('#customer\\.address\\.state').fill(state);
  await page.locator('#customer\\.address\\.zipCode').fill(zipCode);
  await page.locator('#customer\\.phoneNumber').fill(phone);
  await page.locator('#customer\\.ssn').fill(ssn);
  await page.locator('#customer\\.username').fill(username);
  await page.locator('#customer\\.password').fill(password);
  await page.locator('#repeatedPassword').fill(password);
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your account was created')).toBeVisible();

  // Loga no console os dados criados (útil para debug)
  console.log({
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
  });
});

test('Tentar cadastrar novo usuário sem preencher os campos', async ({ page }) => {
  
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Signing up is easy!')).toBeVisible();
  await expect(page.getByText('First name is required.')).toBeVisible();
  await expect(page.getByText('Last name is required')).toBeVisible();
  await expect(page.getByText('Address is required.')).toBeVisible();
  await expect(page.getByText('City is required.')).toBeVisible();
  await expect(page.getByText('State is required.')).toBeVisible();
  await expect(page.getByText('Zip Code is required.')).toBeVisible();
  await expect(page.getByText('Social Security Number is required.')).toBeVisible();
  await expect(page.getByText('Username is required.')).toBeVisible();
  await expect(page.getByText('Password is required.')).toBeVisible();
  await expect(page.getByText('Password confirmation is required.')).toBeVisible();
});