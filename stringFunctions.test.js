const { reverseString, isPalindrome } = require("./stringFunctions");

describe("stringFunctions is a collection of methods for a string", () => {
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

    // Test cases for checking if a string is a palindrome
    test("Empty string should return null", () => {
        expect(isPalindrome("")).toBe("");
    });

    test("isPalindrome(hello) => false", () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test("isPalindrome(racecar) => true", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
});
