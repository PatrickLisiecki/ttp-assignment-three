const longestSubstring = require("./longestSubstring");

describe("stringFunctions is a collection of methods for a string", () => {
    // Test cases for longest substring
    test("Empty string should return null", () => {
        expect(longestSubstring("")).toBeNull();
    });

    test("longestSubstring(abcabcbb) => 3", () => {
        expect(longestSubstring("abcabcbb")).toBe(3);
    });

    test("longestSubstring(bbbbb) => 1", () => {
        expect(longestSubstring("bbbbb")).toBe(1);
    });

    test("longestSubstring(pwwkew) => 3", () => {
        expect(longestSubstring("pwwkew")).toBe(3);
    });
});
