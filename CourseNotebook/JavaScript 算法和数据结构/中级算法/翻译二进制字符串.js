function binaryAgent(str) {
    let arr_str = str.split(' ');
    let res = [];
    for (let i = 0; i < arr_str.length; i++) {
        let asciicode = parseInt(arr_str[i], 2);
        let charValue = String.fromCharCode(asciicode);
        res.push(charValue);
    }
    res = res.join('');
    console.log(res);
    return res;
}

binaryAgent(
    '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
