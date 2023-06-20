function add(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        return null;
    } else {
        return a + b;
    }
}

function subtract(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        return null;
    } else {
        return a - b;
    }
}

function multiply(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        return null;
    } else {
        return a * b;
    }
}

function divide(a, b) {
    if (
        typeof a === "undefined" ||
        typeof b === "undefined" ||
        a === 0 ||
        b === 0
    ) {
        return null;
    } else {
        return a / b;
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
};
