const fs = require('fs');
const { JSDOM } = require('jsdom');
const $ = require('jquery');

test('test selectEvent', () => {
    // Read the index.html file into a string
    const html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); // Ensure the file is read correctly

    // Load the HTML into JSDOM
    const dom = new JSDOM(html);
    global.document = dom.window.document;
    global.$ = require('jquery')(dom.window);

    // Check if the h1 element contains the expected text
    expect($('h1').text()).toBe("Cheesecake Order Form");
});
