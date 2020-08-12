// Undefined for variables

let name;

console.log(name); // this will gives undefined error bcoz we just defined a variable we haven't not assigned any value 

name = 'Jen'; // here we are assigning the value

if (name === undefined) {
    console.log('please provide the name');
} else {
    console.log(name);
}

//undefined for function arguments
//undefined as function return default value

let cube = function (num) {
    console.log(num);
};

let result = cube();
console.log(result);

//Null as assigned value
let age = 27;

age = null;

console.log(age);