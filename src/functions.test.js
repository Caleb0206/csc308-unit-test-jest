const myFunctions = require('./functions.js');

test('Testing div: Divide by itself -- success', () => {
    const target = 1;
    const result = myFunctions.div(5, 5);
    expect(result).toBe(target);
});
test("Testing div: Divide by 2 -- success", () => {
    const target = 30;
    const result = myFunctions.div(60, 2);
    expect(result).toBe(target);
})
test("Testing div: Divide by 0 -- throw error", () => {
    expect(() => myFunctions.div(60, 0).toThrow("Division by zero"))
});

test("Testing containsNumbers: no numbers -- success", () => {
    const result = myFunctions.containsNumbers("nonumbers!");
    expect(result).toBeFalsy();
});
test("Testing containsNumbers: with numbers -- success", () => {
    const result = myFunctions.containsNumbers("hasnumbers$421#19abc");
    expect(result).toBeTruthy();
});
test("Testing containsNumbers: empty string -- success", () => {
    const result = myFunctions.containsNumbers("");
    expect(result).toBeFalsy;
});
test("Testing containsNumbers: special characters -- success", () => {
    const result = myFunctions.containsNumbers("µ˜∂∆∑ø¨´†˜øåøœ∑ˆ®˜µ≈ª£§∞¢∞£™");
    expect(result).toBeFalsy;
});
test("Testing containsNumbers: Zero -- success", () => {
    const result = myFunctions.containsNumbers("oO(0)");
    expect(result).toBeTruthy;
});
test("Testing containsNumbers: Other characters -- success", () => {
    const result = myFunctions.containsNumbers("`~!@#$%^&*()-+=-/[]{}|;:<>,.");
    expect(result).toBeFalsy;
});
test("Testing containsNumbers: space -- success", () => {
    const result = myFunctions.containsNumbers(" ");
    expect(result).toBeFalsy();
});