import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.goto_login_page()

    await Login.login('tomsmith', 'SuperSecretPassword!')

    // await page.goto('https://the-internet.herokuapp.com/login');

    // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

    // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

    // await page.getByRole('button', { name: ' Login' }).click();
});