import { rndm } from "../lib/index.js";

const randomNumbers = rndm.numbers(4);
const randomLetters = rndm.letters(6);
const randomString = rndm.strings(10);

console.log(randomNumbers);
console.log(randomLetters);
console.log(randomString);

// TODO: Add some proper unit tests
