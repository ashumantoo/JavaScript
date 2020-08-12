/****************************************************
 *                 - IMMEDIATE INVOKE FUNCTION - 
 * --> Immediately Invoked function Expression is a JavaScript function that runs as 
 *     as it is defined.
 * 
 * --> It is a designed Pattern which is also Known as the self-executing Anonymous function.
 * 
 * --> The function becomes a function expression which is immediately executed.
 * 
 * --> The variables within the expression can not be accessed from outside it.
 * 
 */


//Normal Function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();  // function call

//IIFE function
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);


//Assigning the IIFE to a variable stores the function's return value , not the function 
//definition itself.
var result = (function () {
    var name = 'Barry';
    return name;
})();
//Immediately creates the output 
console.log(result);// barry