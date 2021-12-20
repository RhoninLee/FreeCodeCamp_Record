function largestOfFour(arr) {
    let arr_tmp = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => b - a);
        arr_tmp.push(arr[i][0]);
    }
    return arr_tmp;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);
