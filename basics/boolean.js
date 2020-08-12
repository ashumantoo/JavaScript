// === - equality operator
// !== - not equal operator
// <   - less than operator
// >   - Greater than operator
// <=  - less than equal to operator
// >=  - greater than equal to operator

let temp = 30;
let isFreezing = temp === 35;
let isNotEqual = temp !== 32;
let isGreater = temp < 37;
let isLess = temp > 30;
let isGreaterEqual = temp <= 35;
let isLessEqual = temp >= 35;

if (temp <= 32) {
    console.log('It is freezing outside');
}

if (temp >= 110) {
    console.log('It is a way to hot outside');
}


console.log(isFreezing, isNotEqual, isGreater, isLess, isGreaterEqual, isLessEqual);

let age = 67;

let isChild = age <= 7;

let isAdult = age >= 18 && age < 60;

let isSenior = age >= 65;

console.log(isChild, isAdult, isSenior);

if (age <= 7) {
    console.log('You are a child');
}

if (age >= 65) {
    console.log('You are a senior citizen');
}
