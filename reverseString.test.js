const reverseString = require("./reverseString");

describe("stringFunctions is a collection of methods for a string", () => {
    // Test cases for reversing a string
    test("Empty string should return null", () => {
        expect(reverseString("")).toBeNull();
    });

    test("reverseString(hello) => olleh", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("reverseString(OpenAI) => IAnepO", () => {
        expect(reverseString("OpenAI")).toBe("IAnepO");
    });

    test("reverseString(racecar) => racecar", () => {
        expect(reverseString("racecar")).toBe("racecar");
    });
});
