function reverseString(str) {
    let reversed = "";

    // Check if string is empty
    if (str.length === 0) {
        return "";
    }

    // Create a new string that appends the characters of the original string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

module.exports = reverseString;
