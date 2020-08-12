/*************************************
*Functions
*/

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike , ageJane);


function yearsUntilRetirement(year , firstName) {
  var age = calculateAge(year);
  var retimrement = 65 - age;
  if (retimrement > 0) {
    console.log(firstName + ' retires in '+ retimrement + ' years');
  } else {
    console.log(firstName +' is already retired.');
  }
}

yearsUntilRetirement(1993,'Ashutosh');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1969,'John');
