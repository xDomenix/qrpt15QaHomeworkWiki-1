// For this assignment you will need to fill out the locators for the variables below
// and use those variables to fill out the tests below. 
// Read what the test is supposed to do and insert the variables in the () after findElement.

import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");
//Building chrome for our test
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
/*const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");*/
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {

    beforeEach(async () => {
        await driver.get(
            "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementTextContains(await driver.findElement(nameDisplay), "Phillip")
            );
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementTextContains(await driver.findElement(nameDisplay), "Bernice")
            );
            expect(
                await (await driver.findElement(nameDisplay)).getAttribute("value")
            ).toBe("Bernice Ortiz");
        });

        test("A canceled change doesn't persist", async () => {
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(cancelButton).click();
            expect(
                await (await driver.findElement(nameDisplay)).getAttribute("value")
            ).toBe("Phillip Weaver");
        });

        test("A saved change persists", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(saveButton).click();
            await driver.findElement(phillip).click();
            await driver.findElement(bernice).click();
            expect(
                await (await driver.findElement(nameDisplay)).getAttribute("value")
            ).toBe("Test Name");
        });
    });

    describe("handles error messages correctly", () => {
        test("shows an error message for an empty name field", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
        });
        test("lets you cancel out of an error message", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
            await driver.findElement(cancelButton).click();
            expect(await driver.findElements(errorCard)).toHaveLength(0);
        });
    });
});
