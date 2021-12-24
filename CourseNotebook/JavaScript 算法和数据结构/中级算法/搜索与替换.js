function myReplace(str, before, after) {
    const regxA = /^[A-Z]/;
    const arr = after.split('');
    if (regxA.test(before[0])) {
        arr[0] = arr[0].toUpperCase();
    } else {
        arr[0] = arr[0].toLowerCase();
    }
    const new_after = arr.join('');
    str = str.replace(before, new_after);
    return str;
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
