import { Page } from '@playwright/test';

export class RecruitmentPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        menuRecruitment:    () => this.page.getByRole('link', { name: 'Recruitment' }),
        addButton:          () => this.page.getByRole('button', { name: 'Add' }),
    }

    async clickMenuRecruitment() {
        await this.Elements.menuRecruitment().click();
    }

    async clickAdd() {
        await this.Elements.addButton().click();
    }
}