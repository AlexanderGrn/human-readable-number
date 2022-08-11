const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',   // teen
    17: 'seventeen', // teen
    18: 'eighteen',  // teen
    19: 'nineteen',  // teen
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',   // ty
    70: 'seventy', // ty
    80: 'eighty',  // ty
    90: 'ninety',  // ty
    100: 'hundred'
}

// dev
/*
function toReadable(number) {
    'use strict';

    let numArr = String(number).split('');

    if (number < 21) {
        return numbers[number];
    }

    if (number < 100) {
        return `${numbers[numArr[0] + 0]} ${numArr[1] == 0 ? '' : numbers[numArr[1]]}`.trim();
    }

    let rest = numArr[1] > 0 ? numArr[1] + numArr[2] : numArr[2];
    return `${numbers[numArr[0]]} hundred ${rest > 0 ? toReadable(rest) : ''}`.trim();
}

console.log(toReadable(15));
console.log(toReadable(37));
console.log(toReadable(400));
*/

module.exports = function toReadable(number) {
    'use strict';

    let numArr = String(number).split('');

    if (number < 21) {
        return numbers[number];
    }

    if (number < 100) {
        return `${numbers[numArr[0] + 0]} ${numArr[1] == 0 ? '' : numbers[numArr[1]]}`.trim();
    }

    let rest = numArr[1] > 0 ? numArr[1] + numArr[2] : numArr[2];
    return `${numbers[numArr[0]]} hundred ${rest > 0 ? toReadable(rest) : ''}`.trim();
}
