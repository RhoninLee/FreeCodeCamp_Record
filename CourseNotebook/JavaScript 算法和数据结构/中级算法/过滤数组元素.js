function destroyer(...args) {
    let arr = args[0];
    console.log(arr);
    let arr_args = [];
    let res = [];
    for (let i = 1; i < args.length; i++) {
        arr_args.push(args[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr_args.includes(arr[i]) === false) {
            res.push(arr[i]);
        }
    }
    console.log(res);
    return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
