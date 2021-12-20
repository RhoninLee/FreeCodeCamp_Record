function reverseString(str) {
    let arr = str.split('');
    let arr_res = '';
    for (let i = 0; i < arr.length; i++) {
        arr_res += arr[arr.length - 1 - i];
    }
    return arr_res;
}
reverseString('hello');
