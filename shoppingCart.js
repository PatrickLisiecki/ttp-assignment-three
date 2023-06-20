const cart = [];

const prices = {
    apple: 1,
    pear: 2,
    bread: 4,
    eggs: 7,
};

// Push an item onto the cart if the parameters are valid
function addToCart(item, quantity) {
    if (typeof item === "undefined" || quantity === 0) {
        return null;
    }

    const existingItem = cart.find((cartItem) => cartItem.itemName === item);

    if (existingItem) {
        existingItem.itemQuantity += quantity;
    } else {
        cart.push({itemName: item, itemQuantiy: quantity});
    }
}

addToCart({ itemName: "apple", itemQuantity: 10 });
addToCart({ itemName: "pear", itemQuantity: 5 });

console.log(cart);

// Find the item in the cart by its name and update the specified quantity
function removeFromCart(itemName, quantity) {
    const item = cart.find((cartItem) => cartItem.itemName === itemName);

    if (!item) {
        return null;
    } else {
        item.itemQuantity -= quantity;
    }
}

removeFromCart("apple", 5);

console.log(cart);

// Sum the price of each item multiplied by its quantity
function calculateTotal() {
    let total = 0;

    for (const item of cart) {
        total += prices[item.itemName] * item.itemQuantity;
    }

    return total;
}

console.log(calculateTotal());

module.exports = {
    addToCart,
    removeFromCart,
    calculateTotal,
    cart
};
