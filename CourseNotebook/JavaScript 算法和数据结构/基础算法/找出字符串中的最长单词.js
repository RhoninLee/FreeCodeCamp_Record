function findLongestWordLength(str) {
    let arr_str = str.split(' ');
    let arr_tmp = [];
    for (let i = 0; i < arr_str.length; i++) {
        arr_tmp.push(arr_str[i].length);
    }
    arr_tmp.sort((a, b) => b - a);
    return arr_tmp[0];
}
findLongestWordLength('The quick brown fox jumped over the lazy dog');
