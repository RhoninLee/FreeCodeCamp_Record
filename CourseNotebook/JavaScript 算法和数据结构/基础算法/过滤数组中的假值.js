function bouncer(arr) {
    let arr_tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr_tmp.push(arr[i]);
        }
    }
    return arr_tmp;
}
bouncer([7, 'ate', '', false, 9]);
