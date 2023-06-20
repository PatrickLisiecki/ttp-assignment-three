const {
    addToCart,
    removeFromCart,
    calculateTotal,
    cart,
} = require("./shoppingCart");

describe("A shopping cart with add, remove, and calculate total", () => {
    cart.length = 0;
    // Test cases for adding items to cart that exist and do not exist
    test("Adding 10 bread to the cart", () => {
        addToCart("bread", 10);
        const expected = [{ itemName: "bread", itemQuantity: 10 }];
        expect(cart).toEqual(expected);
    });

    test("Removing 5 bread from the cart", () => {
        removeFromCart("bread", 5);
        const expected = [{ itemName: "bread", itemQuantity: 5 }];
        expect(cart).toEqual(expected);
    });

    test("calculateTotal() => 35", () => {
        expect(calculateTotal()).toBe(35);
    });
});
