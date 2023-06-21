const longestSubstring = require("./longestSubstring");

describe("Longest substring without repeating characters", () => {
    // Test cases for longest substring
    test("Empty string should return null", () => {
        expect(longestSubstring("")).toBe(0);
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
