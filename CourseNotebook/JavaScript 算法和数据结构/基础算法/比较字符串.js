function mutation(arr) {
    let arr_tmp = arr[1].toLowerCase().split('');
    for (let i = 0; i < arr_tmp.length; i++) {
        if (!arr[0].toLowerCase().includes(arr_tmp[i])) {
            return false;
        }
    }
    return true;
}
mutation(['hello', 'hey']);
