const containMostWater = require("./containMostWater");

/*
    Test cases:
    Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
    Expected output: 49

    Input: [4, 3, 2, 1, 4]
    Expected output: 16

    Input: [1, 2, 1]
    Expected output: 2
*/

describe("Find the largest max area", () => {
    // Test cases for finding the max area to contain water
    test("Empty array should return 0 max area", () => {
        expect(containMostWater([])).toBe(0);
    });

    test("containMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) => 49", () => {
        expect(containMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test("containMostWater([4, 3, 2, 1, 4]) => 16", () => {
        expect(containMostWater([4, 3, 2, 1, 4])).toBe(16);
    });

    test("containMostWater([1, 2, 1]) => 2", () => {
        expect(containMostWater([1, 2, 1])).toBe(2);
    });
});
