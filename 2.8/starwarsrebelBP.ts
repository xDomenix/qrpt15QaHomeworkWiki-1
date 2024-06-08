// starwarsrebelBP.ts
import { WebDriver, By, until, WebElement } from 'selenium-webdriver';
import { Builder } from 'selenium-webdriver';

export class Google {
    driver: WebDriver;
    private searchBox: By;
    private results: By;

    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
        this.searchBox = By.name('q');
        this.results = By.id('search');
    }

    async navigate(): Promise<void> {
        await this.driver.get('https://www.google.com');
    }

    async search(term: string): Promise<void> {
        await this.driver.findElement(this.searchBox).sendKeys(term + '\n');
        await this.driver.sleep(1000); // wait for suggestions to appear
    }

    async getResults(): Promise<string> {
        await this.driver.wait(until.elementLocated(this.results), 10000);
        const elements = await this.driver.findElements(By.css('#search .g'));
        let resultsText = '';
        for (let element of elements) {
            const text = await element.getText();
            resultsText += text + '\n';
        }
        return resultsText;
    }
}