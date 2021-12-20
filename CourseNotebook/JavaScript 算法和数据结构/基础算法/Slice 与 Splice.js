function frankenSplice(arr1, arr2, n) {
    let arr_tmp = [];
    if (arr2.length === 0) {
        return arr1;
    }
    if (arr1.length === 0) {
        return arr2;
    }
    for (let i = 0; i < arr2.length; i++) {
        if (i === n) {
            for (let j = 0; j < arr1.length; j++) {
                arr_tmp.push(arr1[j]);
            }
        }
        arr_tmp.push(arr2[i]);
    }
    return arr_tmp;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
