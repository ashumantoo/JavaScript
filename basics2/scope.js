/***************************************
* Scoping
*/

// First Scoping Example

/*
var a = 'Hello';
first();

function first() {
  var b = 'Hi';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + ' ' + b +' ' + c);
  }
}
*/

/*=============================== DIFFERENCE BETWEEN VAR,LET AND CONST =======================================
 *        KEYWORD               SCOPE             HOISTING          CAN BE ASSIGNED         CAN BE REDECLARED
 *         Var               Function Scope        Yes                 Yes                     Yes
 *         Let               Block Scope           NO                  Yes                     No
 *         Const             Block Scope           NO                  NO                      NO
 *============================================================================================================*/

// Example to show the difference between execution stack and scope chain

var a = 'Hello';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  // console.log(c);
  console.log('1 ->', a + d);
}


//=============================================================================================
// Initialize a global scope variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  // In local scope a variable with the same name , of the outer scope actually created two seperate 
  // variables in two different scope
  var species = "werewolf";
  console.log('3 ->', species);
}

console.log('2 ->', species); //Log globla scope variable
transform(); // Log local scope variable
console.log('4 ->', species); // Log global scope variable
