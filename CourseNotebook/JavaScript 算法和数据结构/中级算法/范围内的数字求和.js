function sumAll(arr) {
    let arr_new = arr.sort((a, b) => a - b);
    let sum = 0;
    let num = arr_new[0];
    for (let i = 0; i < arr_new[1] - arr_new[0] + 1; i++) {
        sum = sum + num + i;
    }
    console.log(sum);
    return sum;
}

sumAll([1, 4]);
