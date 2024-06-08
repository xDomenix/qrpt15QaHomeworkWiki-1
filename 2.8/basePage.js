// basePage.js
const { By, until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateTo(url) {
        await this.driver.get(url);
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async findElements(locator) {
        return await this.driver.findElements(locator);
    }

    async click(locator) {
        await this.driver.findElement(locator).click();
    }

    async type(locator, text) {
        await this.driver.findElement(locator).sendKeys(text);
    }

    async waitForElement(locator, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        return await this.driver.wait(until.elementIsVisible(element), timeout);
    }
}

module.exports = BasePage;