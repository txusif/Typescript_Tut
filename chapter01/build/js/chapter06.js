"use strict";
class Coder {
    // secondLang!: string;
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello! I'm ${this.age} year's old.`;
    }
}
const Txusif = new Coder("txusif", ["J. Cole", "Juice WRLD", "Mac Miller"], 21);
console.log(Txusif);
// console.log(Txusif.age);
// console.log(Txusif.lang);
console.log(Txusif.getAge());
//!/////////////////////////////////////////////////////////////////////////////////
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Learning ${this.lang}.`;
    }
}
const Xx = new WebDev("Window", "X", ["Eminem", "X"], 19);
console.log(Xx);
console.log(Xx.getLang());
class Guitaristt {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitaristt("Jimmy", "guitar");
console.log(Page.play("strums"));
//!/////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
//!/////////////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings.");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zepplin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
