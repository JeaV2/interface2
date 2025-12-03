import log from '../c/logger.js';
const add = (a, b) => log(`Adding ${a} and ${b}: ${a + b}`);
const subtract = (a, b) => log(`Subtracting ${b} from ${a}: ${a - b}`);
export { add, subtract };