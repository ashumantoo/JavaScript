/***********************************
 * Boolean Logic
 * 
 * 1. AND (&&) - TRUE if all are true
 * 2. OR (||) - TRUE if one of the true
 * 3. NOT (!) - TRUE if false , false if true
 */

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man');
}