// testGoogleSearch.js
const { Builder } = require('selenium-webdriver');
const GooglePage = require('./googlePage');

(async function testGoogleSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    let googlePage = new GooglePage(driver);

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