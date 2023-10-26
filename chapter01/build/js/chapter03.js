"use strict";
let stringsArr = ["txusif", "wassup", "Hello"];
let guitars = ["strat", "Les Paul", 5150];
let mixedData = ["Yo", 999, true];
stringsArr[0] = "Byee";
stringsArr.push("good good");
guitars[0] = 1980;
guitars.unshift("Van Halen");
let test = [];
let bands = [];
bands.push("Van Halen");
let myTuple = ["Monster", 72, false];
let mixed = ["John", 1, true];
myTuple[1] = 83;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    props1: "name",
    props2: true
};
exampleObj.props1 = "john";
let jw = {
    name: "Juice WRLD",
    isActive: false,
    albums: ["GBGR", "LND"]
};
let unknown = {
    isActive: true,
    albums: ["Hello World", 1984]
};
const greetArtist = (artist) => {
    if (artist.name) {
        return `Hello ${artist.name}!`;
    }
    return "Hello!";
};
console.log(greetArtist(unknown));
// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
