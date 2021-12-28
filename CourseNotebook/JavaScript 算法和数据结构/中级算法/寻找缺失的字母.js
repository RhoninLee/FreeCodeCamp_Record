function fearNotLetter(str) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let num = letters.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== letters[i + num]) {
            return letters[i + num];
        }
    }
    return undefined;
}

fearNotLetter('abce');
