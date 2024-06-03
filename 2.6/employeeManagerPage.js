// employeeManagerPage.js
import { By, WebDriver } from "selenium-webdriver";

export class EmployeePage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'http://example.com'; // Replace with the actual URL
        this.bernice = By.css('css-selector-for-bernice'); // Replace with actual selector
        this.name = By.name('name'); // Replace with actual selector
        this.saveBtn = By.id('save-button'); // Replace with actual selector
        this.employeeName = By.id('employee-name'); // Replace with actual selector
    }

    async navigate() {
        await this.driver.get(this.url);
    }

    async click(elementBy) {
        await this.driver.findElement(elementBy).click();
    }

    async setInput(elementBy, value) {
        const input = await this.driver.findElement(elementBy);
        await input.clear();
        await input.sendKeys(value);
    }

    async getText(elementBy) {
        return await this.driver.findElement(elementBy).getText();
    }
}
