function diffArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
