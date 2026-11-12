import { Page } from '@playwright/test';

export class AddCandidatePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        firstName:        () => this.page.getByRole('textbox', { name: 'First Name' }),
        lastName:         () => this.page.getByRole('textbox', { name: 'Last Name' }),
        email:            () => this.page.getByRole('textbox', { name: 'Type here' }).nth(0),        
        saveButton:       () => this.page.getByRole('button', { name: 'Save' }),
    }

    async setFirstName(firstName: string) {
        await this.Elements.firstName().fill(firstName);
    }

    async setLastName(lastName: string) {
        await this.Elements.lastName().fill(lastName);
    }

    async setEmail(email: string) {
        await this.Elements.email().fill(email);
    }

    async clickSave() {
        await this.Elements.saveButton().click();
    }
}