//Type Conversions in Javascript

/*=======================================================================================================
 *  1. Most of the time, operators and functions automatically convert the values given to them to the
 *     right type.
 *  2. Type Conversions in javascript happens when we need a particular values to be in a particular type
 *  3. For Example - String conversion happens when we need the string form of a value.
 *  4. We can use the String(value) function to explicitly convert a value to a string:
 *=======================================================================================================*/

//String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string


//Numeric Conversion
/*=======================================================================================================
 *  1. Numeric conversion happens in mathematical functions and expressions automatically.
 *  2. We can use the Number(value) function to explicitly convert a value to a number
 *=======================================================================================================*/

console.log("6" / "3"); // 2; here strings are converted into numbers

//We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number


//If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed
