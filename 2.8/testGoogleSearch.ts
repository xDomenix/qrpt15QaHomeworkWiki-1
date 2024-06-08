// testGoogleSearch.ts
import { Builder, WebDriver, By } from 'selenium-webdriver';
import GooglePage from './googlePage';

(async function testGoogleSearch() {
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();
    let googlePage: GooglePage = new GooglePage(driver);

    try {
        await googlePage.navigateTo('https://www.google.com');
        await googlePage.searchFor('Star Wars Rebels');

        const results = await googlePage.getResults();
        console.log(`Number of results: ${results.length}`);

        for (let result of results) {
            const title = await result.findElement(By.css('h3')).getText();
            console.log(`Result title: ${title}`);
        }
    } finally {
        await driver.quit();
    }
})();