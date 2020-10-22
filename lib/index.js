"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventseed = [
    ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
    ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
    ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
    ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const strings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const calc = (chars, length) => {
    let random = '';
    for (var i = length; i > 0; --i) {
        random += chars[Math.abs((Math.floor(Math.random() * Math.pow(2, 32)) ^ (eventseed[i % 4] >>> (i % 23))) % (chars.length - 1 + 1))];
    }
    return random;
};
exports.default = {
    numbers: (l = 4) => calc(numbers, l),
    letters: (l = 4) => calc(letters, l),
    strings: (l = 6) => calc(strings, l)
};
//# sourceMappingURL=index.js.map