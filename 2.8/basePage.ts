// basePage.ts
import { WebDriver, By, until, WebElement } from 'selenium-webdriver';

export default class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigateTo(url: string): Promise<void> {
        await this.driver.get(url);
    }

    async findElement(locator: By): Promise<WebElement> {
        return await this.driver.findElement(locator);
    }

    async findElements(locator: By): Promise<WebElement[]> {
        return await this.driver.findElements(locator);
    }

    async click(locator: By): Promise<void> {
        await this.driver.findElement(locator).click();
    }

    async type(locator: By, text: string): Promise<void> {
        await this.driver.findElement(locator).sendKeys(text);
    }

    async waitForElement(locator: By, timeout: number = 10000): Promise<WebElement> {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        return await this.driver.wait(until.elementIsVisible(element), timeout);
    }
}