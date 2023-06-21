function containMostWater(arr) {
    // Empty array returns 0 area
    if (arr.length === 0) {
        return 0;
    }

    let start = 0;
    let end = arr.length - 1;

    let maxArea = 0;

    while (start <= end) {
        // AREA = HEIGHT * WIDTH
        // Choose the smaller column as the height of the container
        let height = 0;
        if (arr[start] <= arr[end]) {
            height = arr[start];
        } else {
            height = arr[end];
        }

        // The width is the difference between the current indexes
        let width = end - start;

        // Calculate current area and compare it with the current max area
        let currentArea = height * width;

        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        // Move towards the end with the greater height
        if (arr[start] > arr[end]) {
            end--;
        } else {
            start++;
        }
    }

    return maxArea;
}

module.exports = containMostWater;
