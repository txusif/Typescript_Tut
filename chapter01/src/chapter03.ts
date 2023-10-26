let stringsArr = ["txusif", "wassup", "Hello"];
let guitars = ["strat", "Les Paul", 5150];
let mixedData = ["Yo", 999, true];

stringsArr[0] = "Byee";
stringsArr.push("good good");

guitars[0] = 1980;
guitars.unshift("Van Halen");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

let myTuple: [string, number, boolean] = ["Monster", 72, false];
let mixed = ["John", 1, true];

myTuple[1] = 83;

let myObj: object;
myObj = []
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    props1: "name",
    props2: true
}

exampleObj.props1 = "john";

type Artists = {
    name?: string,
    isActive: boolean,
    albums: (string | number)[];
}

let jw: Artists = {
    name: "Juice WRLD",
    isActive: false,
    albums: ["GBGR", "LND"]
}

let unknown: Artists = {
    isActive: true,
    albums: ["Hello World", 1984]
}

const greetArtist = (artist: Artists) => {
    if (artist.name) {
        return `Hello ${artist.name}!`
    }
    return "Hello!";
}

console.log(greetArtist(unknown));


// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);