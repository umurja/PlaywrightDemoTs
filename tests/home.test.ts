// home.test.ts
import { test, expect } from '@playwright/test';
import { BrowserstackHomePage } from '../pages/home.page';
import { AboutPage} from '../pages/about.page.ts';


test.describe('Test Homepage Menu', () => {

    test('Browserstack ProductMenu', async ({ page }) => {
    const homepage = new BrowserstackHomePage(page);
    await homepage.goto();
    await homepage.clickOnProducts();
    await expect(homepage.prodSubMenuManlA11yLink).toBeVisible;
    await expect(homepage.prodSubMenuAutomateLink).toBeVisible;
    await expect(homepage.prodSubMenuAutomateTurboLink).toBeVisible;
    await expect(homepage.prodSubMenuPercyLink).toBeVisible;
    await expect(homepage.prodSubMenuLowCodeLink).toBeVisible;
    await expect(homepage.prodSubMenuTestMgmtLink).toBeVisible;
    await expect(homepage.prodSubMenuTestObserveLink).toBeVisible;
    await expect(homepage.prodSubMenuAppLiveLink).toBeHidden;
    await expect(homepage.prodSubMenuAppPercyLink).toBeHidden;

    await homepage.clickProdSubMenuAppTestBtn();
    await expect(homepage.prodSubMenuManlA11yLink).toBeHidden;
    await expect(homepage.prodSubMenuAutomateLink).toBeHidden;
    await expect(homepage.prodSubMenuAutomateTurboLink).toBeHidden;
    await expect(homepage.prodSubMenuPercyLink).toBeHidden;
    await expect(homepage.prodSubMenuLowCodeLink).toBeHidden;
    await expect(homepage.prodSubMenuTestMgmtLink).toBeHidden;
    await expect(homepage.prodSubMenuTestObserveLink).toBeHidden;
    await expect(homepage.prodSubMenuAppLiveLink).toBeVisible;
    await expect(homepage.prodSubMenuAppPercyLink).toBeVisible;

    });

    test('Browserstack DeveloperMenu', async ({ page }) => {
        const homepage = new BrowserstackHomePage(page);
        await homepage.goto();
        await homepage.clickOnDevelopers();
        await expect(homepage.devMenuDocumentation).toBeVisible
        await expect(homepage.devMenuSupport).toBeVisible
        await expect(homepage.devMenuStatus).toBeVisible
        await expect(homepage.devMenuReleaseNotes).toBeVisible
        await expect(homepage.devMenuOpenSrc).toBeVisible
        await expect(homepage.devMenuEvents).toBeVisible
        await expect(homepage.devMenuTestU).toBeVisible
        await expect(homepage.devMenuChampions).toBeVisible
    });

    test('Browserstack AboutUs Page', async ({ page }) => {
        const aboutPage = new AboutPage(page)
        await aboutPage.goto();
        await expect(page).toHaveURL("https://www.browserstack.com/company");
        await aboutPage.clickmeetCustomersBtn();
        await expect(page).toHaveURL("https://www.browserstack.com/customers");
    });
});