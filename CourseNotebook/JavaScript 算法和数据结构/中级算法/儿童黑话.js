function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, '$&way') // 以元音开头，后面匹配所有字母，替换为-》整体字符串连接way
        .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay'); // 第一组，以非元音开头，多重匹配；第二组，匹配所有的字母； 替换为二组在前一组在后+ay
}

// test here
translatePigLatin('consonant');
