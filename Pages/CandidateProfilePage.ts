import { Page } from '@playwright/test';

export class CandidateProfilePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        title:        () => this.page.getByRole('heading', { name: 'Candidate Profile' }),
        firstName:    () => this.page.getByRole('textbox', { name: 'First Name' }),
        lastName:     () => this.page.getByRole('textbox', { name: 'Last Name' }),
        email:        () => this.page.getByRole('textbox', { name: 'Type here' }).nth(0),
    }
}