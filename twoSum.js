function twoSum(arr, target) {
    if (arr.length <= 1) {
        throw new Error("Array needs to contain at least two elements!");
    }

    let map = {}

    for (let i = 0; i < arr.length; i++) {
        // Calculate difference
        let diff = target - arr[i]

        // Check if difference has been visited before
        if (diff in map) {
            return [map[diff], i]
        } else {
            map[arr[i]] = i
        }
    }

    return null
}

module.exports = twoSum;