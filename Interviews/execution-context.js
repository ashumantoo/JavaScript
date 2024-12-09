/**********************************************************************************************************************
 *                                     EXECUTION CONTEXT IN JS
 * --- Execution context is an environment in which the javascript code runs.
 * --- There are two types of execution context in Javascript
 *       a) Global Execution context - All the variables and functions declaration defined in global scope are hoisted 
 *                                    in the GLOBAL EXECUTION CONTEXT.
 * 
 *       b) Function Execution context - All the variables and functions declaration defined in function scope are also
 *                                      get hoised in FUNCTION EXECUTION CONTEXT.
 * 
 * --- There is at least one execution context exists in JS always. can exists multiple also.
 */

function returnName() {
  console.log("2", name); //Jacob Ronny - since we don't have var name declaration in function execution context the return 
  //name function will look for name variable in global execution context and print the value from there
}
console.log("1", name); //undefined - here var name will be hoisted in global execution context
var name = "Jacob Ronny";
returnName()

var name2 = "John Abraham";
function getName() {
  console.log("3", name2); //undefined - Because here the in function execution context the hoisting again will happen for name2 the value will be undefined
  var name2 = "Ajay Devgan";
  console.log("4", name2); //Ajay Devgan
}
getName();


