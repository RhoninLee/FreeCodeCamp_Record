function confirmEnding(str, target) {
    // // 简单方法endswith
    // if(str.endsWith(target)){
    // 	return true;
    // } else {
    // 	return false;
    // }
    if (str.length < target.length) {
        return false;
    }
    let arr_str = str.split('');
    let arr_target = target.split('');
    arr_str.reverse();
    arr_target.reverse();
    for (let i = 0; i < arr_target.length; i++) {
        if (arr_target[i] !== arr_str[i]) {
            return false;
        }
    }
    return true;
}
confirmEnding('Bastian', 'n');
