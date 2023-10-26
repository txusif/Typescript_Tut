// Type Alias
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Guitarist {
    name?: string,
    isActive: boolean,
    albums: stringOrNumberArray
}


type userId = stringOrNumber;

// interface postId = stringOrNumber;

// Literal Types
let myName: 'txusif';
// myName = 'txusifx';

let userNamee: 'txusif' | 'toushief' | 'tousif' | 'tausif';
// userNamee = 'toushief';

// Function
const add = (a: number, b: number): number => {
    return a + b;
}

const logMessage = (message: any): void => {
    console.log(message);
}

logMessage('Hello World');
logMessage(add(2, 3));

let subtract = function (c: number, d: number) {
    return c - d;
}

logMessage(subtract(10, 3));

type MathFunction = (a: number, b: number) => number;

// interface MathOperation {
//     (a: number, b: number): number;
// }

let multiply: MathFunction = function (a, b) {
    return a * b;
}

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}
// logMessage(addAll(2, 3, 10));


// Default parameters
const sumAll = (a: number = 17, b: number, c: number = 7): number => {
    return a + b + c;
}
logMessage(sumAll(2, 3 /* +2 */));
logMessage(sumAll(undefined, 3 /* +2 */));

// Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

logMessage(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infiniteLoop = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

// Use of never type
const numberOrString = (value: string | number): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('Expected string or number, got ' + value);
}

// logMessage(numberOrString('Hello World'))
// logMessage(numberOrString(13400))
// logMessage(numberOrString(true))