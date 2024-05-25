//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class Employee {
  name: string;
  phone: string;
  title: string;

  constructor(name: string, phone: string, title: string) {
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
}

let employees: Array<Employee> = [
  new Employee("John Doe", "1234567890", "Manager"),
  new Employee("Jane Smith", "0987654321", "Developer"),
  new Employee("Jim Brown", "5555555555", "Designer"),
  new Employee("Jill White", "4444444444", "Analyst")
];

const addEmployee: By = By.css('[name="addEmployee"]');
const newEmployee: By = By.css('.employeeCard:not([style*="display: none"])');
const nameInput: By = By.name('nameEntry');
const phoneInput: By = By.name('phoneEntry');
const titleInput: By = By.name('titleEntry');
const saveBtn: By = By.id('saveBtn');

let myFunc = async (employee: Employee) => {
  await driver.findElement(addEmployee).click();
  await driver.findElement(nameInput).clear();
  await driver.findElement(nameInput).sendKeys(employee.name);
  await driver.findElement(phoneInput).clear();
  await driver.findElement(phoneInput).sendKeys(employee.phone);
  await driver.findElement(titleInput).clear();
  await driver.findElement(titleInput).sendKeys(employee.title);
  await driver.findElement(saveBtn).click();
};

describe("should add employees to employee manager", () => {
  test("can add employees using myFunc", async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");
    for(let i = 0; i < employees.length; i++) {
      await myFunc(employees[i]);
    }
    await driver.sleep(3000);
    await driver.quit();
  });
});