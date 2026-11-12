import { Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        username:       () => this.page.getByRole('textbox', { name: 'Username' }),
        password:       () => this.page.getByRole('textbox', { name: 'Password' }),
        loginButton:    () => this.page.getByRole('button', { name: 'Login' }),
        errorMessage:   () => this.page.getByRole('alert'),
    }

    async setUsername(username: string) {
        await this.Elements.username().fill(username);
    }

    async setPassword(password: string) {
        await this.Elements.password().fill(password);
    }

    async clickLogin() {
        await this.Elements.loginButton().click();
    }
}