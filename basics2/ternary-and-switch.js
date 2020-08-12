/***********************************
*Ternary Operator and Switch operator
*/

var firstName = 'John';
var age = 22;

//Ternary operator
var ternary = age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructur':
    console.log(firstName + ' is a '+ job);
  break;
  case 'driver':
    console.log(firstName+ ' drives an uber');
  break;
  case 'designer':
    console.log(firstName+ ' drives an uber');
  break;
  default:
    console.log(firstName+ ' does something else');

}
