//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class BrowserstackHomePage {
readonly url ="https://www.browserstack.com/";
readonly page: Page;
readonly browserstackLogo: Locator;
readonly menuContainer: Locator;
readonly productMenuDropdown:Locator
readonly prodSubMenuWebTestBtn:Locator
readonly prodSubMenuAppTestBtn:Locator
readonly prodSubMenuManlA11yLink:Locator
readonly prodSubMenuAutomateLink: Locator
readonly prodSubMenuAutomateTurboLink: Locator;
readonly prodSubMenuPercyLink: Locator;
readonly prodSubMenuLowCodeLink: Locator;
readonly prodSubMenuTestMgmtLink: Locator;
readonly prodSubMenuTestObserveLink: Locator;
readonly prodSubMenuAppLiveLink: Locator;
readonly prodSubMenuAppPercyLink: Locator;

readonly developerMenuDropdown:Locator
readonly devMenuDocumentation:Locator
readonly devMenuSupport:Locator
readonly devMenuStatus:Locator
readonly devMenuReleaseNotes:Locator
readonly devMenuOpenSrc:Locator
readonly devMenuEvents:Locator
readonly devMenuTestU:Locator
readonly devMenuChampions:Locator

readonly liveForTeamsMenu:Locator
readonly pricingMenu:Locator
readonly signInMenu:Locator

constructor(page: Page) {
    this.page = page;
    this.browserstackLogo = page.locator(".bstack-mm-logo");
    this.menuContainer = page.locator("#primary-menu-container");

    this.productMenuDropdown = page.locator("#products-dd-toggle");
    this.prodSubMenuWebTestBtn = page.locator("button[title='Web Testing']");
    this.prodSubMenuAppTestBtn = page.locator('#products-dd-tab-2');
    this.prodSubMenuManlA11yLink = page.locator("a[title='Accessibility Testing']");
    this.prodSubMenuAutomateLink = page.locator("a[title='Automate']");
    this.prodSubMenuAutomateTurboLink = page.locator("a[title='Automate TurboScale']");
    this.prodSubMenuPercyLink = page.locator("a[title='Percy']");
    this.prodSubMenuLowCodeLink = page.locator("a[title='Low Code Automation']");
    this.prodSubMenuTestMgmtLink = page.locator("a[title='Test Management']");
    this.prodSubMenuTestObserveLink = page.locator("a[title='Test Observability']");
    this.prodSubMenuAppLiveLink = page.locator("a[title='App Live']");
    this.prodSubMenuAppPercyLink = page.locator("a[title='App Percy']");

    this.developerMenuDropdown = page.locator("#developers-dd-toggle");
    this.devMenuDocumentation = page.locator("a.bstack-mm-link.bstack-mm-dev-link-documentation");
    this.devMenuSupport = page.locator("a.bstack-mm-link.bstack-mm-dev-link-support");
    this.devMenuStatus = page.locator("a.bstack-mm-link.bstack-mm-dev-link-status");
    this.devMenuReleaseNotes = page.locator("a.bstack-mm-link.bstack-mm-dev-link-release-notes");
    this.devMenuOpenSrc = page.locator("a.bstack-mm-link.bstack-mm-dev-link-open-source");
    this.devMenuEvents = page.locator("a.bstack-mm-link.bstack-mm-dev-link-events");
    this.devMenuTestU = page.locator("a.bstack-mm-link.bstack-mm-dev-link-test-university");
    this.devMenuChampions = page.locator("a.bstack-mm-link.bstack-mm-dev-link-browserstack-champions");


    this.liveForTeamsMenu = page.locator("a[title='Live for Teams']");
    this.pricingMenu = page.locator("a[title='Pricing']");
    this.signInMenu = page.locator("a[title='Sign in']");
}

async goto(){
await this.page.goto(this.url);
}
async clickOnProducts() {
    await this.menuContainer.waitFor({ state: "visible" })
    await this.productMenuDropdown.click()
}
async clickOnDevelopers() {
    await this.menuContainer.waitFor({ state: "visible" })
    await this.developerMenuDropdown.click()
}
async clickProdSubMenuAppTestBtn() {
    await this.prodSubMenuAppTestBtn.waitFor({ state: "visible" })
    await this.prodSubMenuAppTestBtn.click()
}
}