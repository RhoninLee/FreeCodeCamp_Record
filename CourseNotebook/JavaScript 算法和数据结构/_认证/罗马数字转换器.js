const o = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const t = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const h = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const th = ['', 'M', 'MM', 'MMM'];

function convertToRoman(num) {
    let res = '';
    let arr = num.toString().split('');
    switch (arr.length) {
        case 4:
            res = `${th[parseInt(arr[0])]}${h[parseInt(arr[1])]}${
                t[parseInt(arr[2])]
            }${o[parseInt(arr[3])]}`;
            break;
        case 3:
            res = `${h[parseInt(arr[0])]}${t[parseInt(arr[1])]}${
                o[parseInt(arr[2])]
            }`;
            break;
        case 2:
            res = `${t[parseInt(arr[0])]}${o[parseInt(arr[1])]}`;
            break;
        case 1:
            res = `${o[parseInt(arr[0])]}`;
            break;
    }
    return res;
}

convertToRoman(36);

// Math way to implement the requestment
// function convert(num) {
//     var ans = '';
//     var k = Math.floor(num / 1000);
//     var h = Math.floor((num % 1000) / 100);
//     var t = Math.floor((num % 100) / 10);
//     var o = num % 10;
//     var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//     var ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//     var hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//     var thousand = 'M';
//     for (var i = 0; i < k; i++) {
//         ans += thousand;
//     }
//     if (h) ans += hundred[h - 1];
//     if (t) ans += ten[t - 1];
//     if (o) ans += one[o - 1];
//     return ans;
// }
