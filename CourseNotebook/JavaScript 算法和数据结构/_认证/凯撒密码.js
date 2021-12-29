function rot13(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
        let asciicode = arr[i].charCodeAt(0);
        // if char in A-Z
        if (asciicode <= 90 && asciicode >= 65) {
            asciicode += 13;
            // asciicode + 13, if > 90, then need -90 +64
            if (asciicode > 90) {
                asciicode = asciicode - 90 + 64;
            }
            arr[i] = String.fromCharCode(asciicode);
        }
    }
    return arr.join('');
}

rot13('SERR PBQR PNZC');
