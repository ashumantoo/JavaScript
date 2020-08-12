///////////////////////////////////////
// Destructuring

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name, '---', age);


//ES6
// Destructuring in Array
const [name1, age1] = ['John', 27];
console.log(name1, '---', age1);


// Destructruing in Object
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const { firstName, lastName } = obj;
console.log(firstName, '---', lastName);


function calculateAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calculateAgeRetirement(1993);
console.log(age2, '---', retirement);
