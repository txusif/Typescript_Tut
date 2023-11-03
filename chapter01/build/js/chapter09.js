"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1. Partial 
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "compsci123",
    title: "Final Project",
    grade: 0
};
// console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// 2. Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(assignVerified);
// recordAssignment(assignGraded)
// recordAssignment({...assignGraded, verified:true})
// 3. Record
const hexColorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#000FFF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "A",
};
const gradeDate = {
    Sara: { assign1: 82, assign2: 80 },
    Kelly: { assign1: 98, assign2: 89 }
};
const score = {
    studentID: "USCS501",
    grade: 59
};
const preview = {
    studentID: "USCS502",
    title: "INS",
};
// Return Type
// type NewAssign = { title: string, points: number }
const createNewAssignment = (title, points) => {
    return { title, points };
};
const tAssign = createNewAssignment("Utility Types", 100);
console.log(tAssign);
const assignArgs = ["Generics", 100];
const tAssign2 = createNewAssignment(...assignArgs);
console.log(tAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
