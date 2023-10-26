"use strict";
// interface postId = stringOrNumber;
// Literal Types
let myName;
// myName = 'txusifx';
let userNamee;
// userNamee = 'toushief';
// Function
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello World');
logMessage(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMessage(subtract(10, 3));
// interface MathOperation {
//     (a: number, b: number): number;
// }
let multiply = function (a, b) {
    return a * b;
};
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// logMessage(addAll(2, 3, 10));
// Default parameters
const sumAll = (a = 17, b, c = 7) => {
    return a + b + c;
};
logMessage(sumAll(2, 3 /* +2 */));
logMessage(sumAll(undefined, 3 /* +2 */));
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('Expected string or number, got ' + value);
};
// logMessage(numberOrString('Hello World'))
// logMessage(numberOrString(13400))
// logMessage(numberOrString(true))
