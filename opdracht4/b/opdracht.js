import { capitalize, countChars, reverse } from "./string-utils.js";

const string = "This is a test string to test the string utils.";

console.log(`Original string: ${string}`);
console.log(`Capitalized: ${capitalize(string)}`);
console.log(`Character count: ${countChars(string)}`);
console.log(`Reversed: ${reverse(string)}`);

