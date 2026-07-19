/**************** Variable Hoisting *******************/
//1.
//reference error : address1 is not defined
// console.log(address1)


//2.
//Undefined
console.log(address2)
var address2 = "Greater Nodia West"


//3.
//Undefined
console.log(city)
var city


//4
//Reference error: can not access variable before initialization
// console.log(state)
// let state;


//5
//Reference error: can not access variable before initialization
// console.log(state1)
// let state1 = "UP"


//6
//SyntaxError: Missing initializer in const declaration
// console.log(country)
// const country;


//7
//ReferenceError: Cannot access 'country' before initialization
// console.log(country)
// const country = "India";









/**************** function Hoisting *******************/
//1.
//ReferenceError: displayName is not defined
// console.log(displayName())


//2.
//No error with normal function: it will display the name 'Ashutosh'
console.log(showName())
function showName(){
  return "Ashutosh"
}


//3.
//ReferenceError with function as expression: Cannot access 'getName' before initialization
// console.log(getName())
// const getName = function(){
//   return 'Ashutosh'
// }



//4
// ReferenceError: Cannot access 'formatName' before initialization
// console.log(formatName())
// const formatName = () =>{
//   return 'Ashutosh'
// }
