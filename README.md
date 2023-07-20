# TTP Assignment 3

Assignment for the Tech Talent Pipeline Summer 2023 Bootcamp

## Part 1: Basic Unit Testing

Create a new JavaScript file called mathFunctions.js. Implement the following functions in mathFunctions.js:
- add(a, b): Takes two numbers a and b and returns their sum.
- subtract(a, b): Takes two numbers a and b and returns the difference between a and b.
- multiply(a, b): Takes two numbers a and b and returns their product.
- divide(a, b): Takes two numbers a and b and returns the result of dividing a by b.

Create a test file called mathFunctions.test.js. Write test cases in mathFunctions.test.js to verify the correctness of each function in mathFunctions.js using Jest. Ensure you cover different scenarios, including edge cases and invalid inputs. Run the tests using Jest and ensure that all tests pass.

## Part 2: Algorithm Testing

Create a new JavaScript file called stringFunctions.js. Implement the following functions in stringFunctions.js:
- reverseString(str): Takes a string str and returns the reversed string.
- isPalindrome(str): Takes a string str and returns true if it is a palindrome, and false otherwise.

Create a test file called stringFunctions.test.js. Write test cases in stringFunctions.test.js to verify the correctness of each function in stringFunctions.js using Jest. Ensure you cover different scenarios, including edge cases and special characters. Run the tests using Jest and ensure that all tests pass.

## Part 3: Integration Testing

Create a new JavaScript file called shoppingCart.js. Implement the following functions in shoppingCart.js:
- addToCart(item, quantity): Adds an item with a specified quantity to the shopping cart.
- removeFromCart(item, quantity): Removes a specified quantity of an item from the shopping cart.
- calculateTotal(): Calculates and returns the total cost of all items in the shopping cart.

Create a test file called shoppingCart.test.js. Write test cases in shoppingCart.test.js to verify the correctness of each function in shoppingCart.js using Jest. Include tests for adding items, removing items, and calculating the total cost. Run the tests using Jest and ensure that all tests pass.

## Part 4: JS Algorithm Problems

Write both the functions and the test files for those functions exactly as you did for the above.

### Easy: Two Sum

Description: Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to the target.

Example: 
```javascript
twoSum([2, 7, 11, 15], 9)
```
should return `[0, 1]` because 2 + 7 = 9.

Test cases:
- Input: `[2, 7, 11, 15], 9`
  Expected output: `[0, 1]`
- Input: `[3, 2, 4], 6`
  Expected output: `[1, 2]`
- Input: `[-1, -2, -3, -4, -5], -8`
  Expected output: `[2, 4]`

### Easy: Reverse String

Description: Given a string `str`, return the reverse of the string.

Example: 
```javascript
reverseString("hello")
```
should return `"olleh"`.

Test cases:
- Input: `"hello"`
  Expected output: `"olleh"`
- Input: `"OpenAI"`
  Expected output: `"IAneuqO"`
- Input: `"racecar"`
  Expected output: `"racecar"`

### Medium: Longest Substring Without Repeating Characters

Description: Given a string `str`, find the length of the longest substring without repeating characters.

Example: 
```javascript
lengthOfLongestSubstring("abcabcbb")
```
should return `3` because the longest substring without repeating characters is "abc".

Test cases:
- Input: `"abcabcbb"`
  Expected output: `3`
- Input: `"bbbbb"`
  Expected output: `1`
- Input: `"pwwkew"`
  Expected output: `3`

### Medium: Container With Most Water

Description: Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water.

Example: 
```javascript
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
```
should return `49` because the maximum area is obtained by choosing the heights 8 and 7, with the width between them being 7.

Test cases:
- Input: `[1, 8, 6, 2, 5, 4, 8, 3, 7]`
  Expected output: `49`
- Input: `[4, 3, 2, 1, 4]`
  Expected output: `16`
- Input: `[1, 2, 1]`
  Expected output: `2`

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:

```ps
git clone https://github.com/PatrickLisiecki/ttp-assignment-three
```

2. Open the project directory.

3. Install the required dependencies:

```ps
npm install
```

## Usage

To run the tests, use the following command:

```ps
npm test
```

This will execute the test files for each part of the assignment and show the results in the console.
