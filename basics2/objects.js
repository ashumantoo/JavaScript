/******************************
*Objects and Properties
*/

//object literal
var john = {
  firstName : 'John',
  lastName : 'Smith',
  birthYear:1990,
  family : ['Jane','Mark','Bob','Emaily'],
  job:'Teacher',
  isMarried:false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job= 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntex
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Kelly';
jane.birthYear = 1989;
console.log(jane);
