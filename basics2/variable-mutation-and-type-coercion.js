/************************************************
 * Variable Mutation and type coercion
 * 
 * Type Coercion - one type variable is get converted into other type variable in javascript
 *                e.g. - A number is automatically converted into a string
 * 
 * Variable Mutation - reassigning of a variable which is already assign
 *                     i.e we can change the value of a variable any time.
 */

var firstName = 'John'; //string
var age = 28;           // number

//Type coercion
console.log(firstName + ' ' + age);

var job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);
