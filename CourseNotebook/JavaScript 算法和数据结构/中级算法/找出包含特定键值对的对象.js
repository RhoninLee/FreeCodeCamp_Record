function whatIsInAName(collection, source) {
    const ks = Object.keys(source);
    return collection.filter(e => {
        for (let i = 0; i < ks.length; i++) {
            if (!e.hasOwnProperty(ks[i]) || e[ks[i]] !== source[ks[i]]) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName(
    [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
);

// Other solution
// function whatIsInAName(collection, source) {
//     const ks = Object.keys(source);
//     return collection.filter(e => {
//         return ks.every(k => {
//             return e.hasOwnProperty(k) && e[k] === source[k];
//         });
//     });
// }

// whatIsInAName(
//     [
//         { first: 'Romeo', last: 'Montague' },
//         { first: 'Mercutio', last: null },
//         { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' }
// );
