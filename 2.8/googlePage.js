// googlePage.js
const BasePage = require('./basePage');
const { By } = require('selenium-webdriver');

class GooglePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.searchBox = By.name('q');
        this.searchButton = By.name('btnK');
        this.results = By.id('search');
    }

    async searchFor(term) {
        await this.type(this.searchBox, term);
        await this.driver.sleep(1000); // wait for suggestions to appear
        await this.searchBox.sendKeys('\n'); // press Enter
    }

    async getResults() {
        await this.waitForElement(this.results);
        return await this.findElements(By.css('#search .g'));
    }
}

module.exports = GooglePage;