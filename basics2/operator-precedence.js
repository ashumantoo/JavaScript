/**********************************
 * Operator Precedence
 */

var now = 2018,
    yearJohn = 1990,
    fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operator
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//Challenge
var markHeight = 5.20;
johnHeight = 5.40;
markMass = 48;
johnMass = 45;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
var isGreater = johnBMI > markBMI;

console.log('Is Mark BMI is higher than John BMI ' + isGreater);