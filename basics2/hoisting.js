/*****************************************
* Hoisting in Javascript
*/

// Functions
calculateAge(1965); // function hoisting calling before defining

//function declaration
function calculateAge(year) {
  console.log(2016 - year);
}

/*************************************************************************************
 * here calling of function before defining, it will gives error
 * because function hoisting would not work with function expression
 * and retirement() function is a function expression
 *************************************************************************************/
// retirement(1965); 

//function expression
var retirement = function (year) {
  console.log('1--', 65 - (2016 - year));
};


//variables
/*********************************************************************************************
 *  variable hoisting - calling variable before the defining
 *  here variable age will set as a variable that value has not been
 *  assing yet and it will set as 'undefined' in varaible object of default excution context
 *********************************************************************************************/
console.log('2--', age);
var age = 23;

//function declration
function foo() {
  console.log('3--', age);
  var age = 65;
  console.log('4--', age);
}

//function call
foo();
console.log('5--', age);
