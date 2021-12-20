function factorialize(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i;
        console.log(res, '   ', i);
    }
    return res;
}
factorialize(5);
