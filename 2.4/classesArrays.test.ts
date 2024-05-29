//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
// The script imports necessary modules from selenium-webdriver.
// The chromedriver package is required to enable Selenium to control Chrome.
// A new WebDriver instance is created with Chrome capabilities, which sets up the Selenium WebDriver for Chrome.
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

const addEmployee: By = By.name("addEmployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]'); // Is the newEmployee locator (By.xpath('//li[text() = "New Employee"]')) always reliable, or could it change dynamically? Would a more robust locator strategy be beneficial?
const nameInput: By = By.name('nameEntry');
const phoneInput: By = By.name('phoneEntry');
const titleInput: By = By.name('titleEntry');
const saveBtn: By = By.id('saveBtn');

let myFunc = async (employee: Employee) => {
  await driver.findElement(addEmployee).click();
  await driver.findElement(newEmployee).click();
  await driver.findElement(nameInput).clear();
  await driver.findElement(nameInput).sendKeys(employee.name);
  await driver.findElement(phoneInput).clear();
  await driver.findElement(phoneInput).sendKeys(employee.phone);
  await driver.findElement(titleInput).clear();
  await driver.findElement(titleInput).sendKeys(employee.title);
  await driver.findElement(saveBtn).click();
};
//myFunc Function:
//The myFunc function is an asynchronous function that takes an Employee object as a parameter.
//It performs a series of actions to add the employee to the application:
//Clicking on the "Add Employee" button.
//Selecting the "New Employee" list item.
//Clearing and entering data into the name, phone, and title input fields.
//Clicking the "Save" button to save the new employee.

describe("should add employees to employee manager", () => {
  test("can add employees using myFunc", async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");
    for(let i = 0; i < employees.length; i++) {
      await myFunc(employees[i]);
    }
    await driver.sleep(3000); // Is the await driver.sleep(3000); sufficient to ensure all operations are complete? Could this be replaced with more robust waiting mechanisms, such as waiting for specific elements to be present or conditions to be met?
    await driver.quit(); // Is await driver.quit(); guaranteed to run if there is an error in adding employees? Should there be a finally block to ensure the browser is closed?
  });
});

//Test Suite:

//A test suite is defined using Jest with a single test case.
//The test case opens the Employee Manager application in the browser.
//It loops through the array of employees and calls myFunc for each employee to add them to the application.
//The script waits for 3 seconds after adding the employees (to allow observation of the added employees).
//Finally, the browser is closed to end the test.