function getIndexToIns(arr, num) {
    if (arr.length === 0) {
        num = 0;
        return num;
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            num = i;
            break;
        }
        if (i === arr.length - 1) {
            num = arr.length;
        }
    }
    return num;
}
getIndexToIns([10, 20, 30, 40, 50], 30);
