import { Builder, Capabilities } from "selenium-webdriver";
const chromedriver = require('chromedriver'); 
import { EmployeePage } from "./employeeManagerPage";

const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
const page = new EmployeePage(driver); 

describe("Practicing Page Objects", () => {
    // Navigate to the page before each test
    beforeEach(async () => {
        await page.navigate(); 
    });

    // Quit the driver after all tests are done
    afterAll(async () => {
        await page.driver.quit(); 
    });

    test('changing Bernice Ortiz\'s name', async () => {
        // Click Bernice's element to select her
        await page.click(page.bernice);
        
        // Click on the name input field to focus it
        await page.click(page.name);
        
        // Change the name to "Jane Doe"
        await page.setInput(page.name, "Jane Doe");
        
        // Click the save button to save the changes
        await page.click(page.saveBtn);
        
        // Get the new name text from the employee name element
        let newName = await page.getText(page.employeeName);
        
        // Assert that the new name is "Jane Doe"
        expect(newName).toContain('Jane Doe');
    });

    test('adding a new employee', async () => {
        // Click the add employee button
        await page.click(page.addEmployee);

        // Click on the newly created employee (assuming it's automatically selected after creation)
        await page.click(page.newEmployee);

        // Set the name of the new employee
        await page.setInput(page.name, "Joey Wilkinson");

        // Set the phone number of the new employee
        await page.setInput(page.phone, '8018675309');

        // Set the title of the new employee
        await page.setInput(page.title, 'Coolest Mentor Ever');

        // Click the save button to save the new employee
        await page.click(page.saveBtn);

        // Get the new employee's name text to confirm creation
        let newEmployeeName = await page.getText(page.employeeName);

        // Assert that the new employee's name is "Joey Wilkinson"
        expect(newEmployeeName).toContain('Joey Wilkinson');
    });

    test('promoting Phillip by changing his title', async () => {
        // Click Phillip's element to select him
        await page.click(page.phillip);

        // Click on the title input field to focus it
        await page.click(page.title);

        // Change the title to "Co-CEO"
        await page.setInput(page.title, 'Co-CEO');

        // Click the save button to save the changes
        await page.click(page.saveBtn);

        // Get the new title text from the employee details section
        let newTitle = await page.getText(page.title);

        // Assert that the new title is "Co-CEO"
        expect(newTitle).toContain('Co-CEO');
    });
});
