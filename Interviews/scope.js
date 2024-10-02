/*****************************************************************************************
 *                      Variable scope in JS
 * --- var vs let vs const
 * --- Scope :- scope is a region of a program where a defined variable exists and can
 *              be regcognize, outside or beyond of that they are not recognize.
 * --- Javascript has 3 types of scope:
 *     1. Global scope
 *     2. Function scope
 *     3. Block scope (Introduced in ES6 by using let and const)
 */


//Global scope
var name = "Ashutosh";
var a = 10;
let b = 20;
let num1 = 100;
const c = 30;

console.log(a, b, c); //10,20,30

// c = 40; Uncaught TypeError : Assignment to constant variable

//by using var keyword we can accessing a veriable before it's decleration and the value will
//be undefined due to the hoisting
console.log(d); //undefined
var d;
d = 31;
console.log(d) //31

//console.log(num2) //scope.js:31 Uncaught ReferenceError: num2 is not defined

// console.log(age); //ReferenceError: Cannot access 'age' before initialization
let age = 30;
console.log(age) //30

//function scope - 
function getValue() {
  // c = 40; Uncaught TypeError : Assignment to constant variable
  let value = true;
  let num1 = 200;
  var a = 40;
  name = "Mantoo";
  b = 50;
  console.log(a, name, b, num1); //40,Mantoo,50,200

  //Block level scope
  if (value) {
    // c = 40; Uncaught TypeError : Assignment to constant variable
    let num1 = 300;
    var f = 70;
    let g = 80;
    const i = 90;
    console.log(num1, f, g, i) //300,70,80,90
  }
  console.log(num1) //200
  console.log(f) //70 - Will be accessible - BECAUSE VAR HAS FUNCTION LEVEL SCOPE
  //console.log(g) //ReferenceError: g is not defined - DUE TO BLOCK LEVEL SCOPE
}

getValue();
console.log(a, name, b, num1); //10,Mantoo,50,100
// console.log(f) //Uncaught ReferenceError: f is not defined - BECAUSE variable "f" which is declared with var keyword which has the function level scope and that can not be accessible from outside the function


/********************************************************************************
 *Questions
 * 
 */
console.log("******************************************************************")

//Variable Shadowing - Overriding the outside variable from inside a block scope
function test() {
  let greet = "Hello";

  if (true) {
    let greet = "Hi"; //Here we are shadowing the value of greet variable by 
    console.log(greet); //Hi
  }

  console.log(greet); //Hello
}
test();



//Illegal Shadowing - Shawdoing var variable with let is possible, but Shadowing let with var is not possible it will give error
function test2() {
  var greet = "Hello";
  let goodBye = "Bye"

  if (true) {
    let greet = "Hi";
    //var goodBye = "See you soon" //Uncaught SyntaxError: Identifier 'goodBye' has already been declared
  }
}
test2();


//* with var keyword we can defined the same variable as many times we want, it does not gives any error
var str;
var str;
var str;
console.log(str)//undefined


// With let and const we can not defined the variable with the same name multiple times in the same scope
let firstName;
//let firstName; //Uncaught SyntaxError: Identifier 'firstName' has already been declared 
{
  let firstName; //Here it's fine
}



//Declaration with Initialization - Re-Initialization of a const variable is not possible, if you do that you will get an error of "Re-initialization of const variable "
var city; //Fine - no error
let firstCity; // Fine - no error
//const lastCity; //Uncaught SyntaxError: Missing initializer in const declaration




/***********************************************************************************************************************************************************************
 *                                     HOISTING
 * --- Javascript execution context- When we try to execute a js code there are two phases
 *     1) Creation Phase - In Creation phase 3 things happens
 *            a) It's creates the gloable/Window object
 *            b) Set a memory heap for storing the functions and variable references - That means it's takes
 *               all the functions and variables and stores it's inside the widnow/Global object
 *            c) It initializes those variable with the value of "undefined", and for the functions it's sotre the whole fuctnion decleration
 *     2) Execution Phase - In this phase Javscript engine execute the code line by line,  and assign the values to the variables and exuecute
 *        the functions calls
 * 
 * --- HOISTING - It is a machanism in which Javascript engine moves variable and fucntion declration to the top of their scope (Also called scope of their EXECUTION CONTEXT) 
 *                and this happens during creation phase.
 * 
 * --- let and const variables are also hoisted, but they are not hoisted inside the globle object instead they are hoisted in a seperate state that
 *     called "Temporal Dead Zone
 * 
 * --- Temporal Dead Zone - It is a time between a variable decleration and initialization of let and const variables
 */

// console.log(count); //
let count = 1;

function abc() {
  console.log(_a, _b, _c); // _a=undefined, but we will get error for _b and _c ReferenceError: Cannot access '_b' before initialization

  const _c = 30;
  let _b = 20;
  var _a = 10;
}

abc();