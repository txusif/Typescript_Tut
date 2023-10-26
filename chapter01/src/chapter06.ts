class Coder {
    // secondLang!: string;
    constructor(
        public readonly name: string,
        public music: string[],
        private age: number,
        protected lang: string = "Typescript"
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello! I'm ${this.age} year's old.`;
    }
}

const Txusif = new Coder("txusif", ["J. Cole", "Juice WRLD", "Mac Miller"], 21,);
console.log(Txusif);
// console.log(Txusif.age);
// console.log(Txusif.lang);
console.log(Txusif.getAge());

//!/////////////////////////////////////////////////////////////////////////////////

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string[],
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `Learning ${this.lang}.`;
    }
}

const Xx = new WebDev("Window", "X", ["Eminem", "X"], 19);
console.log(Xx);
console.log(Xx.getLang());
// console.log(Xx.getAge());

//!/////////////////////////////////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitaristt implements Musician {
    name: string
    instrument: string

    constructor(
        name: string,
        instrument: string,
    ) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitaristt("Jimmy", "guitar");
console.log(Page.play("strums"));

//!/////////////////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;

    constructor(
        public name: string
    ) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

//!/////////////////////////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return
        }

        else throw new Error("Param is not an array of strings.");
    }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zepplin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
