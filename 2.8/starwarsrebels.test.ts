// starwarsrebel.ts
import { Google } from "./starwarsrebelBP";

import * as fs from 'fs/promises';

const google = new Google();

test('do a search', async () => {
    await google.navigate();
    await google.search('Star Wars Rebels');
    let text = await google.getResults();
    expect(text).toContain('Star Wars Rebels');
    
    await fs.writeFile(`${__dirname}/google.png`,
        await google.driver.takeScreenshot(), "base64");
    console.log('Save Successful: google.png');
    
    await fs.writeFile(`${__dirname}/test.txt`, text);
    console.log('Save Successful: test.txt');
});

afterAll(async () => {
    await google.driver.quit();
});