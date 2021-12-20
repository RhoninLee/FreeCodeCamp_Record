function repeatStringNumTimes(str, num) {
    // // easy way to use repeat
    // return str.repeat(num);
    let str_tmp = '';
    if (num <= 0) {
        return '';
    }
    for (let i = 0; i < num; i++) {
        str_tmp += str;
    }
    return str_tmp;
}

repeatStringNumTimes('abc', 3);
