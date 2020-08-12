/*
*Function Statements and Expressions
* 1. Expression - Everytime we expect a value to be produced we use Expression
     simply , expression imediately return a value
     e.g - 2 + 3 = 5 -> is a expression
           ageJohn > ageMike -> is a expression
           whatDoYouDo('teacher','john') -> is a expression

  2. Statements -> Statements are also produced the value but not imediately.
      e.g - the complete if else Statement
            the switch Statement
*/
//Functions declaration
/*
function whatDoYouDo(job,firstName) {
}
*/
//Function Expression
var whatDoYouDo = function (job,firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
       return firstName + ' drives a cab in Libson';
    case 'designer':
       return firstName + ' designs beautiful websites';
    default:
       return firstName + ' does something else';
  }
};

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));
