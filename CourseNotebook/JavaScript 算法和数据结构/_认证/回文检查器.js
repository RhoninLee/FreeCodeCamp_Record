// 回文检查器
function palindrome(str) {
    let s = str.replace(
        /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
        ''
    );
    s = s.toLowerCase();
    let s_arr = s.split('');
    s_arr.reverse();
    let s_new = s_arr.join('');
    console.log(s, s_arr, s_new);
    if (s_new === s) {
        return true;
    } else {
        return false;
    }
}

palindrome('eye');
console.log(palindrome('eye'));
