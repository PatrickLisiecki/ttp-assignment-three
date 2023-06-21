const reverseString = require("./reverseString");

describe("Reverse a string", () => {
    // Test cases for reversing a string
    test("Empty string should return nothing", () => {
        expect(reverseString("")).toBe("");
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
