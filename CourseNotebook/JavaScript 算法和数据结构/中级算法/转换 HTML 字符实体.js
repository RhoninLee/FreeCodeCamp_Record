function convertHTML(str) {
    let arr_str = str.split('');
    for (let i = 0; i < arr_str.length; i++) {
        switch (arr_str[i]) {
            case '&':
                arr_str[i] = '&amp;';
                break;
            case '<':
                arr_str[i] = '&lt;';
                break;
            case '>':
                arr_str[i] = '&gt;';
                break;
            case '"':
                arr_str[i] = '&quot;';
                break;
            case "'":
                arr_str[i] = '&apos;';
                break;
        }
    }
    str = arr_str.join('');
    return str;
}

convertHTML('Dolce & Gabbana');
