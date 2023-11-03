// Utility Types

interface Assignment {
    studentID: string,
    title: string,
    grade: number,
    verified?: boolean
}

// 1. Partial 
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentID: "compsci123",
    title: "Final Project",
    grade: 0
}

// console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// 2. Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true,
}
console.log(assignVerified);

// recordAssignment(assignGraded)
// recordAssignment({...assignGraded, verified:true})


// 3. Record
const hexColorMap: Record<string, string> = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#000FFF"
}

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "A",
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeDate: Record<Students, Grades> = {
    Sara: { assign1: 82, assign2: 80 },
    Kelly: { assign1: 98, assign2: 89 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentID" | "grade">
const score: AssignResult = {
    studentID: "USCS501",
    grade: 59
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentID: "USCS502",
    title: "INS",
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// Non-nullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>


// Return Type
// type NewAssign = { title: string, points: number }

const createNewAssignment = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssignment>

const tAssign: NewAssign = createNewAssignment("Utility Types", 100);
console.log(tAssign);


// Parameters
type AssignParams = Parameters<typeof createNewAssignment>

const assignArgs: AssignParams = ["Generics", 100];

const tAssign2: NewAssign = createNewAssignment(...assignArgs);
console.log(tAssign2);


// Awaited -> helps us with ReturnType of a promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) console.log(err.message);
    })

    return data;
}

type FetchUsersReturnType1 = ReturnType<typeof fetchUsers>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))