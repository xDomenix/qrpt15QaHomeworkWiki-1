import { pageObject } from "./2.7PageObject";
const pages = new pageObject(); 

class Intern {
    name: string; 
    phone: number; 
    title: string; 

    constructor(name:string, phone: number, title: string){
        this.name= name; 
        this.phone = phone; 
        this.title = title; 
    }; 
}; 

let newInterns: Array<Intern> = [
  new Intern("John Doe", 1234567890, "Software Engineer"),
  new Intern("Jane Smith", 2345678901, "Quality Assurance"),
  new Intern("Alice Johnson", 3456789012, "Product Manager"),
  new Intern("Paul Rudd", 8018018801, "General Manager"),
];

let addInterns = async (newInterns) => {
    await pages.click(pages.addEm); 
    await pages.click(pages.newEm); 
    await pages.setInput(pages.namInp, newInterns.name); 
    await pages.setInput(pages.phoInp, newInterns.phone); 
    await pages.setInput(pages.titleInp, newInterns.title); 
    await pages.click(pages.saveBtn); 
    await pages.driver.sleep(3000); 
};

test('can add the bake off crew',async () => {
    await pages.navigate(); 
    await pages.getElement(pages.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await pages.driver.quit(); 
})