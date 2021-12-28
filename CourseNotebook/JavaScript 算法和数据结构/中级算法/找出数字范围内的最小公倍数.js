function smallestCommons(arr) {
    arr = arr.sort((a, b) => a - b);
    let arr_new = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        arr_new.push(i);
    }
    let res = arr[1] + 1;
    while (res > 0) {
        if (arr_new.every(ele => res % ele === 0)) {
            return res;
        }
        res++;
    }
    return undefined;
}

smallestCommons([1, 5]);
