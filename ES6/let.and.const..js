// Let and Const


//ES5
var names5 = 'Jane Smiths';
var age5 = 23;
names5 = 'Jane Miller';

//ES6
/**
 * const -1. the value of variable which is defined with the const keyword will not be changed.
 *           If you tyring to change the value of the const variables this will gives an error 'Assignmet to constant variable'
 *           so if you know the value of a variable never going to change then use 'const'
 *           otherwise don't.
 *  
 * let - 1. 'let' is similar to the var keyword. 
 *           the value of the let variable can be change or it can be mutate.
 */

const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; // this gives error tyring to change the value of the const variable


//ES5
function driverLicence5(passedTest) {
    console.log(firstName); // this decalared the variable and set as undefined

    if (passedTest) {
        var firstName = 'Jane';
        var yearOfBirth = 1999;
    }
    console.log(firstName + ', born in' + yearOfBirth + ' is now officially allowed to drive the car.');
}

driverLicence5(true);

//ES6
/*
 --let and const are not function scope but they are the block scope
 --whereas the var is the function scope they are accessible anywhere inside the function.
*/
function driverLicence6(passedTest) {
  /**
   * In ES6 the variable defined with let , we can not used it before the declaration, as we can do by defining a variable with var keyword.
   * Simply this is because in ES6 the variable defined with let get hoised but they are exist something called 'temporalzone'.
   * the meaning of the temporaral zone is that we can not used that variable till we defined that.
   */
    // console.log(firstName); this gives and error
    let firstName;
    const yearOfBirth = 1999;
    if (passedTest) {
        // let firstName = 'Jane';
        // const yearOfBirth = 1999;
        firstName = 'Jane';
        console.log(firstName + ', born in' + yearOfBirth + ' is now officially allowed to drive the car.');

    }
    console.log(firstName + ', born in' + yearOfBirth + ' is now officially allowed to drive the car.'); // this gives error becacuse
    //variables are out of the scope
}

driverLicence6(true);



let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
