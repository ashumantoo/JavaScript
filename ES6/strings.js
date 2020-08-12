// Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years of old.');

//ES6 using the template literals with backtic
console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years of old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('n'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));

