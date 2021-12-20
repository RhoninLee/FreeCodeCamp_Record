function chunkArrayInGroups(arr, size) {
    let arr_tmp = [];
    for (let i = 0; i < arr.length; i += size) {
        let arr_tmp1 = [];
        arr_tmp1 = arr.slice(i, size + i);
        arr_tmp.push(arr_tmp1);
    }
    return arr_tmp;
}
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
