/**********************************************************************************************************************
 *                                     EXECUTION CONTEXT IN JS
 * --- Exection context is an environment in which the javascript code runs.
 * --- There are two types of exection context in Javascript
 *       a) Global Exection context - All the variables and functions declaration defined in global scope are hoisted 
 *                                    in the GLOBAL EXECTION CONTEXT.
 * 
 *       b) Function Exection context - All the variables and functions declaration defined in function scope are also
 *                                      get hoised in FUNCTION EXECTION CONTEXT.
 * 
 * --- There is atleast one exection context exists in JS always. can exists multiple also.
 */

function returnName() {
  console.log("2", name); //Jacob Ronny - since we don't have var name declartion in function exection context the return 
  //name function will look for name variable in global exection context and print the valur from there
}
console.log("1", name); //undefined - here var name will be hoisted in global exection context
var name = "Jacob Ronny";
returnName()

var name2 = "John Abraham";
function getName() {
  console.log("3", name2); //undefined - Because here the in function exection context the hoisting again will happen for name2 the value will be undefined
  var name2 = "Ajay Devgan";
  console.log("4", name2); //Ajay Devgan
}
getName();

