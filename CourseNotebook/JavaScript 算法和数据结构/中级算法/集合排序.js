function uniteUnique(...arr) {
    let arr_new = [];
    for (let i = 0; i < arr.length; i++) {
        arr_new = arr_new.concat(arr[i]);
    }
    console.log(arr_new);
    // easy way:
    // return Array.from(new Set(arr_new));

    // other way:
    let arr_res = [];
    for (let i = 0; i < arr_new.length; i++) {
        // 如果元素在新数组中不存在，则push
        if (arr_res.indexOf(arr_new[i]) === -1) {
            arr_res.push(arr_new[i]);
        }
    }
    console.log(arr_res);
    return arr_res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
