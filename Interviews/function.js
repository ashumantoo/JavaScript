/**************************************************************************************************
 *                                       Functions
 * Video Link :https://www.youtube.com/watch?v=btwFJT_xzdg&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=3
 * --- Argument vs Params
 *     Argument - when we passes the value while calling the function, those values are arguments
 *     Params - When we receive those value from the function is called Params
 */

//1. Function declarations / Function definition or Function statement
function square(num) {//Params
  return num * num;
}
console.log(square(5)); //Arguments

//2. Function Expression - with anonymous function - a function which has no name
//Anonymous function can be assigned to a variable or can be passed as a callback
const sum = function (a, b) {
  return a + b;
}
console.log(sum(10, 20));


/****************************************************************************************************
 * 3. First class function
 * --- A programing language is called as a first class function if the function in that language is
 *     treated as a variable, that can be assigned to variable, that can be pass as a arguement to the
 *     a function, even that can be returned as well.
 */

function squareRoot(num) {
  return Math.sqrt(num);
}

const displaySquareRoot = function (fn) {
  console.log("square root number is ", fn(64));
}

displaySquareRoot(squareRoot);


/***************************************************************************************************
 * 4. IIFE - Immediaterly Invoke function
 * 
 */

(function substraction(a, b) {
  console.log(`Diff of ${a} and ${b} is `, a - b);
})(20, 10);

(function x(x) {
  return (
    function y(y) {
      console.log(x) //5, x is not avaialbe in the inner scope but it's avaible in it's parent scope
    }
  )(10)
})(5);


for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i); //with var the output will be - 5,5,5,5,5
  }, i * 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i); //with let the output will be - 1,2,3,4,5
  }, i * 1000);
}


/********************************************************************************************************
 *  5. Function Hoisting
 * --- If we call a function before declaration, we din't get any error because functions hoisted 
 *     completely.
 * --- whereas with variable we get undefined if we try to accessa a variable before it's initalization
 * 
 */

console.log(dispalyName()) //"Ashutosh"
function dispalyName() {
  return "Ashutosh";
}

console.log(dispalyName()) //Ashutosh


var x = 20;

function getValue() {
  console.log(x) //undefined - because in local scope the value x is not initialized the time we log. and since
  // the variable x is present in the local scope we also don't go to check that variable in the global scope
  var x = 21;
}

getValue();


/********************************************************************************************************
 *  6. spread vs rest operator
 * 
 */

// function multiply(num1, num2) {
//   console.log(num1 * num2)
// }

// const numbers = [5, 6];
// multiply(...numbers);

function multiply(...numbers) { // here ... is called rest operator
  console.log(numbers[0] * numbers[1])
}

const numbers = [5, 6];
multiply(...numbers); //here ... is spread operator


/************************************************************************************************************************
 * O/P based questions
 * 
 */

//if we want to use rest operator inside the params of a function then that params should be the last value
//otherwise we will get the error - rest parameter must be the last in the list parameters
// function fn(a, b, ...numbers, c, d) {
//   console.log(a, b);
// }

function fn(a, b, c, d, ...numbers) {
  return { a, b, c, d, numbers }
}

console.log(fn(10, 20, ...[3, 40, 50])) // {a: 10, b: 20, c: 3, d: 40, numbers: [50]}
//fn(5, 15, 25, 35, ...{ e: 45, f: 55, g: 65 }) //Spread syntax requires ...iterable[Symbol.iterator] to be a function
console.log(fn(5, 15, 25, 35, ...[45, 55, 65])) // {a: 5, b: 15, c: 25, d: 35, numbers: [45,55,65]}



/***********************************************************************************************************************
 *  7. Callback function:-
 *     A callback function is a function passed into another function as an argument,which then invoke inside the outer
 *     function to complete some kind of action
 */

//Example 1.
function greet(name, callback) {
  const message = `Hello, ${name}`;
  callback(message);
}

function displayGreetings(message) {
  console.log(message);
}

greet("Ashutosh", displayGreetings);
greet("Mohan", (message) => {
  console.log(message)
});

//Example 2
function getPersonFullName(persons, callback) {
  const fullNames = [];
  persons.forEach(person => {
    fullNames.push(`${person.firstName} ${person.lastName}`)
  });
  callback(fullNames);
}

const persons = [
  { firstName: "Ashutosh", lastName: "Mantoo", age: 30 },
  { firstName: "Pulkit", lastName: "Verma", age: 35 },
  { firstName: "Mohit", lastName: "Sharma", age: 22 },
]
getPersonFullName(persons, (personsFullName) => {
  console.log(personsFullName);
});


/***********************************************************************************************************
 * 8. Normal function vs Arrow function
 *    a) Syntext difference
 *    b) arguments key is available in normal function but not available in arrayow function
 *    c) Arrow function doesn't have their own 'this' they are lexical scope (i.e parent scope)
 */

function getNumbers() {
  console.log(arguments);
}

getNumbers(1, 2, 3, 4);

const getNumbersArrowFunction = () => {
  console.log(arguments); //We get error here arguments is not defined
}

// getNumbersArrowFunction(1, 2, 3, 4);


const obj = {
  user: "Ashutosh",
  age: 30,
  displayData: function () {
    return `${this.user} is ${this.age} years old`; //Ashutosh is 30 years old
  },
  displayData2: () => {
    return `${this.user} is ${this.age} years old`; //undefined is undefined years old
  }
}

console.log(obj.displayData());
console.log(obj.displayData2());