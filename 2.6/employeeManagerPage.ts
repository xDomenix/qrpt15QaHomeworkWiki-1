import { By, until, WebDriver } from 'selenium-webdriver';

export class EmployeePage {
    private driver: WebDriver; 
    private url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"; 

    private bernice: By = By.name('employee1'); 
    private name: By = By.name('nameEntry'); 
    private addEmployee: By = By.name('addEmployee'); 
    private newEmployee: By = By.xpath('//li[text()="New Employee"]'); 
    private phone: By = By.name('phoneEntry'); 
    private title: By = By.name('titleEntry'); 
    private phillip: By = By.name('employee3'); 
    private saveBtn: By = By.id('saveBtn'); 
    private employeeName: By = By.name('employeeName'); 

    constructor(driver: WebDriver) {
        this.driver = driver; 
    }

    async navigate(): Promise<void> {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.bernice)); 
    }

    async click(elementBy: By): Promise<void> {
        const element = await this.driver.wait(until.elementLocated(elementBy));
        await element.click();
    }

    async setInput(elementBy: By, keys: string): Promise<void> {
        const element = await this.driver.wait(until.elementLocated(elementBy));
        await element.clear();
        await element.sendKeys(keys);
    }

    async getText(elementBy: By): Promise<string> {
        const element = await this.driver.wait(until.elementLocated(elementBy));
        return await element.getText();
    }
}
