"use strict";
// Index Signatures
const todayTransactions = {
    Pizza: 10,
    Books: 5,
    Job: 50,
};
// console.log(todayTransactions.Pizza);
// console.log(todayTransactions["Pizza"]);
const prop = "Pizza";
// console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Howard",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student);
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    // console.log(`${key}: ${student[key as keyof Student]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
logStudentKey(student, "GPA");
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
