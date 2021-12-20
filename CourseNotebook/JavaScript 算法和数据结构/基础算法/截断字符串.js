function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    let arr_str = str.split('');
    let new_str = '';
    for (let i = 0; i < num; i++) {
        new_str += arr_str[i];
    }
    return `${new_str}...`;
}
truncateString('A-tisket a-tasket A green and yellow basket', 8);
