const myFunctions = require('./functions.js');

test('Testing div: Divide by itself -- success', () => {
    const target = 1;
    const result = myFunctions.div(5, 5);
    expect(target).toBe(result);
});