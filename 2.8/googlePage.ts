// googlePage.ts
import BasePage from './basePage';
import { By, WebDriver, WebElement } from 'selenium-webdriver';

export default class GooglePage extends BasePage {
    private searchBox: By;
    private results: By;

    constructor(driver: WebDriver) {
        super(driver);
        this.searchBox = By.name('q');
        this.results = By.id('search');
    }

    async searchFor(term: string): Promise<void> {
        await this.type(this.searchBox, term);
        await this.driver.sleep(1000); // wait for suggestions to appear
        await this.driver.findElement(this.searchBox).sendKeys('\n'); // press Enter
    }

    async getResults(): Promise<WebElement[]> {
        await this.waitForElement(this.results);
        return await this.findElements(By.css('#search .g'));
    }
}