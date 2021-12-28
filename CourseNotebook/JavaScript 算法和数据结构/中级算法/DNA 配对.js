function pairElement(str) {
    let arr_str = str.split('');
    let res = [];
    for (let i = 0; i < arr_str.length; i++) {
        let tmp_arr = [arr_str[i]];
        switch (arr_str[i]) {
            case 'A':
                tmp_arr.push('T');
                break;
            case 'T':
                tmp_arr.push('A');
                break;
            case 'G':
                tmp_arr.push('C');
                break;
            case 'C':
                tmp_arr.push('G');
                break;
        }
        res.push(tmp_arr);
    }
    return res;
}

pairElement('GCG');
