function titleCase(str) {
    str = str.toLowerCase();
    let arr_str = str.split(' ');
    let tmp = '';
    for (let i = 0; i < arr_str.length; i++) {
        let arr_sub_str = arr_str[i].split('');
        let tmp_sub_str = '';
        for (let j = 0; j < arr_sub_str.length; j++) {
            if (j === 0) {
                tmp_sub_str = arr_sub_str[0].toUpperCase();
                continue;
            }
            tmp_sub_str += arr_sub_str[j];
        }
        tmp += ` ${tmp_sub_str}`;
    }
    tmp = tmp.trim();
    return tmp;
}
titleCase("I'm a little tea pot");
