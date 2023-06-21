const { add, subtract, multiply, divide } = require("./mathFunctions");

describe("A collection of functions that perform mathematical operations", () => {
    // Test cases for add
    test("Missing parameter should return null", () => {
        expect(add(1)).toBeNull();
    });

    test("add(2, 5) => 7", () => {
        expect(add(2, 5)).toBe(7);
    });

    // Test cases for subtract
    test("subtract(5, 2) => 3", () => {
        expect(subtract(5, 2)).toBe(3);
    });

    // Test cases for multiply
    test("multiply(2, -5) => -10", () => {
        expect(multiply(2, -5)).toBe(-10);
    });

    // Test cases for divide
    test("Not possible to divide by 0", () => {
        expect(divide(0, 3)).toBeNull();
    });

    test("divide(100, 20) => 5", () => {
        expect(divide(100, 20)).toBe(5);
    });
});
