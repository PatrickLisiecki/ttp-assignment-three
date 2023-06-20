// Empty cart will store items
const cart = [];

// Prices for available items
const prices = {
    apple: 1,
    pear: 2,
    bread: 4,
    eggs: 7,
};

// Push an item onto the cart or add to an items quantity
function addToCart(itemName, quantity) {
    // Check if parameters are valid
    if (typeof itemName === "undefined" || quantity === 0) {
        return null;
    }

    // Check if item is already in cart
    const existingItem = cart.find(
        (cartItem) => cartItem.itemName === itemName
    );

    // If the item already exists then add to its quantity
    if (existingItem) {
        existingItem.itemQuantity += quantity;
    } else {
        cart.push({ itemName: itemName, itemQuantity: quantity });
    }
}

// Find the item in the cart by its name and update the specified quantity
function removeFromCart(itemName, quantity) {
    // Check if parameters are valid
    if (typeof itemName === "undefined" || typeof quantity === "undefined") {
        return null;
    }

    // Search for the item in the cart
    const item = cart.find((cartItem) => cartItem.itemName === itemName);

    // Verify that the item exists and decrease its quantity
    if (!item) {
        return null;
    } else {
        item.itemQuantity -= quantity;
    }
}

// Sum the price of each item multiplied by its quantity
function calculateTotal() {
    let total = 0;

    // For each item get its corresponding price and multiply it by its quantity
    for (const item of cart) {
        total += prices[item.itemName] * item.itemQuantity;
    }

    return total;
}

module.exports = {
    addToCart,
    removeFromCart,
    calculateTotal,
    cart,
};
