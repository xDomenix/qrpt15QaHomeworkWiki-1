import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'; 

export class pageObject extends BasePage {
    addEm: By = By.name('addEmployee'); // Assuming the add button has an id 'addEmployee'
    newEm: By = By.xpath('//li[text()="New Employee"]'); // Assuming the new employee element has an id 'New Employee'
    namInp: By = By.xpath('(//input[@class="materialInput"])[1]');  // Assuming the name input field has a name attribute 'materialInput'
    phoInp: By = By.name('phoneEntry'); // Assuming the phone input field has a name attribute 'phoneEntry'
    titleInp: By = By.name('titleEntry'); // Assuming the title input field has a name attribute 'titleEntry'
    saveBtn: By = By.id('saveBtn'); // Assuming the save button has an id 'saveBtn'

    constructor(){
        super({url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'});
    };
};