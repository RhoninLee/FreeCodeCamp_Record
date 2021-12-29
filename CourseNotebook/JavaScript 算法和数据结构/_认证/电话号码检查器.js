// hard to understand the regex
function telephoneCheck(str) {
    var re = /^1?\s?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
    return re.test(str);
}

telephoneCheck('555-555-5555');
