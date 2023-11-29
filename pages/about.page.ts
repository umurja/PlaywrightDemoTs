//https://www.browserstack.com/company
import { expect, Locator, Page } from '@playwright/test';

export class AboutPage {
    readonly page: Page;
    readonly url ="https://www.browserstack.com/";
    readonly aboutUrl = "https://www.browserstack.com/company";
    readonly meetCustomersBtn: Locator;

    constructor(page) {
        this.page = page
        this.meetCustomersBtn = page.getByText(' Meet our customers');
    }
    async goto(){
        await this.page.goto(this.aboutUrl);
        }
        
    async clickmeetCustomersBtn() {
        //go to the page
        await this.page.waitForLoadState('domcontentloaded');
        await this.meetCustomersBtn.click()
    }


}
//module.exports = { AboutPage }