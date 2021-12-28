function sumFibs(num) {
    let prev = 0;
    let cur = 1;
    let sum = 0;
    while (cur <= num) {
        if (cur % 2 !== 0) {
            sum += cur;
        }
        cur += prev;
        prev = cur - prev;
    }
    console.log(sum);
    return sum;
}

sumFibs(4);
