/**************************************
*Arrays
*/

//Initialize a new array
var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different Data type
var john = ['John','Smith',1990,'designer',false];

john.push('blue'); //Add last of the array
john.unshift('Mr.'); // add first of the array
console.log(john);

john.pop(); // remove from last of the array
john.pop();
john.shift(); // remove start of the array
console.log(john);

console.log(john.indexOf(23)); // if not found index gives -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);

//Challenge
var tipAmount = [];
var totalAmountPaid = [];
var calculateTip = function(amount){
  if (amount < 50) {
    return (amount * 20)/100;
  } else if(amount > 50 && amount < 200) {
    return (amount * 15) / 100;
  }else{
    return (amount * 10) / 100;
  }
};
var bills = [124,48,268];
tipAmount[0] = calculateTip(bills[0]);
tipAmount[1] = calculateTip(bills[1]);
tipAmount[2] = calculateTip(bills[2]);

totalAmountPaid[0] = bills[0] + tipAmount[0];
totalAmountPaid[1] = bills[1] + tipAmount[1];
totalAmountPaid[2] = bills[2] + tipAmount[2];

console.log(tipAmount);
console.log(totalAmountPaid);
