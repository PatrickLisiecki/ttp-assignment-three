function longestSubstring(str) {
    // Check for empty string
    if (str === "") {
        return 0;
    }

    // Keep track of indexes of seen characters
    let seenCharacters = {};

    let longestLength = 0;
    let startingIndex = 0;

    for (let i = 0; i < str.length; i++) {
        // Check if char has been seen and if its index is after the start of the substring
        if (
            str[i] in seenCharacters &&
            startingIndex <= seenCharacters[str[i]]
        ) {
            // Update the starting index of the new substring
            startingIndex = seenCharacters[str[i]] + 1;
        } else {
            // Check if the current substring is larger
            longestLength = Math.max(longestLength, i - startingIndex + 1);
        }

        // Update or set the index of the current character
        seenCharacters[str[i]] = i;
    }

    return longestLength;
}

module.exports = longestSubstring;
