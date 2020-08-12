/////////////////////////////////////////
// Spread Operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 20, 40, 50);
console.log(sum1);

//ES5
var ages = [18, 20, 40, 50];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anna'];

const bigFamily = [...familySmith, ...familyMiller];
const bigFamily1 = [...familySmith, 'Jonas', ...familyMiller];

console.log(bigFamily);
console.log(bigFamily1);


