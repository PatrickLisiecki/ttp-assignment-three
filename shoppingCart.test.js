const {
    addToCart,
    removeFromCart,
    calculateTotal,
    cart,
} = require("./shoppingCart");

describe("A shopping cart with add, remove, and calculate total functions", () => {
    // Adding bread to the cart
    test("Adding 10 bread to the cart", () => {
        addToCart("bread", 10);
        const expected = [{ itemName: "bread", itemQuantity: 10 }];
        expect(cart).toEqual(expected);
    });

    test("Adding 5 more bread to the cart", () => {
        addToCart("bread", 5);
        const expected = [{ itemName: "bread", itemQuantity: 15 }];
        expect(cart).toEqual(expected);
    });

    // Removing bread
    test("Removing 5 bread from the cart", () => {
        removeFromCart("bread", 5);
        const expected = [{ itemName: "bread", itemQuantity: 10 }];
        expect(cart).toEqual(expected);
    });

    // Adding and removing apples
    test("Adding 4 apples to the cart", () => {
        addToCart("apple", 4);
        const expected = [
            { itemName: "bread", itemQuantity: 10 },
            { itemName: "apple", itemQuantity: 4 },
        ];
        expect(cart).toEqual(expected);
    });

    test("Removing 2 apples from the cart", () => {
        removeFromCart("apple", 2);
        const expected = [
            { itemName: "bread", itemQuantity: 10 },
            { itemName: "apple", itemQuantity: 2 },
        ];
        expect(cart).toEqual(expected);
    });

    // Calculating the total price using the prices from shoppingCart.js
    test("calculateTotal() => 42", () => {
        expect(calculateTotal()).toBe(42);
    });
});
