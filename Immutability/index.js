/**========================================== Mutablity vs Immutability ===============================================
 *  1. Immutable data types in javascript
 *       a. string
 *       b. number
 *       c. undefined
 *       d. null
 *       e. boolean
 *  2. Mutable data types in javascript(since all are referece type)
 *       a. Objects
 *       b. Arrays
 *       c. function
 * 
 *  3. Mutable - means the things that can be changed 
 *     Immutable - means the thing that can not be changed
 * 
 *  4. 
 */

//Example of Immutability for Primitive data types - since here values are getting replaced not modifying
let name = "Ashutosh Mantoo";
let age = 28;
let isMerried = true;
console.log(name, "-", age, "-", isMerried);
name = new String("Ashu");



//1. Example of Mutation
let person = {
  firstName: "Bob",
  lastName: "Loblaw",
  address: {
    street: "123 Fake St",
    city: "Emberton",
    state: "NJ"
  }
};

function giveAwesomePowers(person) {
  person.specialPower = "invisibility"; //here it's mutating the original object
  return person;
}
// Initially, Bob has no powers :(
console.log(person);
// Then we call our function...
let samePerson = giveAwesomePowers(person);
// Now Bob has powers!
console.log(person);
console.log(samePerson);
// He's the same person in every other respect, though.
console.log('Are they the same?', person === samePerson); // true


//Example of Immutability in case of object data type from example 1
let person2 = {
  firstName: "Bob",
  lastName: "Loblaw",
  address: {
    street: "123 Fake St",
    city: "Emberton",
    state: "NJ"
  }
};

/*******************************************************************
 *          PURE FUNCTION 
 *  1. A pure function must always return the same value when given the same inputs.
    2. A pure function must not have any side effects. 
         means - a. a function should not change anything outside of his scope
                 b. should not mutate/modify the input parameters
    
    Note:- A Pure function can only call a pure function
 *
 * ******************************************************************/

function giveAwesomePowersPureFunction(person) {
  // const newPerson = {
  //   ...person
  // }
  // newPerson.specialPower = "invisibility";

  //making a copy of the passed object to the function and then 
  // doing modifiction on that
  const newPerson = {
    ...person,
    specialPower: "invisibility"
  }
  return newPerson;
}

// Initially, Bob has no powers :(
console.log(person2);

// Then we call our function...
var newPerson2 = giveAwesomePowersPureFunction(person2);

// Now Bob's clone has powers!
console.log(person2);
console.log(newPerson2);

// The newPerson is a clone
console.log('Are they the same?', person2 === newPerson2); // false




/** ===================================== Immutability in case of Array ========================================
 *  1. There are the following Javascript array methods that mutate the array
 *       a. push
 *       b. pop
 *       c. shift
 *       d. unshift
 *       e. sort
 *       f. reverse
 *       g. splice
 */
const number = [1, 2, 3, 4, 5];

//there are following 3 way to make a copy of the array

let numbercopy1 = [...number];
let numbercopy2 = number.slice();
let numbercopy3 = number.concat();

//Now we can perform any operaton on copy of the array it will not effect the original array

numbercopy1.push(6);

console.log(number);
console.log(numbercopy1);