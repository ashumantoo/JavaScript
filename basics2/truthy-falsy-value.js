/****************************************
*Truthy and falsy values and equality operators
*/

// False values - undefined, null , 0 , '', NaN
// truthy value - NOT falsy values

var height;

// height = 23;
// height = 0;
height = '';

if (height || height === 0) {
  console.log('Variables is defined');
} else {
  console.log('Variable has not been defined');
}

//Equality Operator
if (height == '23') {
  console.log('The == operator does type coercion');
} else if(height === '23'){
  console.log('The === operator does not type coercion');
}

//Challenge
var johnTeamAvg = (89 + 120 + 103) / 3;
var mikeTeamAvg = (116 + 94 + 123) / 3;
var maryTeamAvg = (97 + 134 + 105) / 3;

console.log(johnTeamAvg , mikeTeamAvg , maryTeamAvg);
if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
  console.log('John Team wins by ',(johnTeamAvg - mikeTeamAvg) );
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
  console.log('Mike Team wins by ' ,(mikeTeamAvg - johnTeamAvg));
}else if(maryTeamAvg > mikeTeamAvg && maryTeamAvg > johnTeamAvg){
  console.log('Marry Team win');
}else {
  console.log('There is a tie');
}
