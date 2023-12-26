function findLargestElement(arr) {
    let max=arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element>max) {
            max=element;
        }
    }
    return max;
}

module.exports = findLargestElement;