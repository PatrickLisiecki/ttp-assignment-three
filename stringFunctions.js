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

function isPalindrome(str) {
    // Check if string is empty
    if (str.length === 0) {
        return "";
    }

    let start = 0;
    let end = str.length - 1;

    // Compare both ends of the string up until the middle
    // If at any point the mirroring characters don't match then return false
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

module.exports = {
    reverseString,
    isPalindrome,
};
