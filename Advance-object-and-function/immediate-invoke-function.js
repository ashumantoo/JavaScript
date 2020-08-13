/***************************************************************************************************
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


//Normal Function Decleration
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//Function Expression
//function expressions are basically a anonymous function which are assigned to a variable
let msg = "Hello, World!";
const sayHi = function () {
    console.log(msg);  // log to console Hello, World
};
sayHi();

//Named function expressions(Function expressions can also have names)
var fibo = function fibonacci() {
    // you can use "fibonacci()" here as this funciton expression has a name.
    //“fibonacci” that can be used inside that function expression to call itself recursively
};

//fibonacci()  here fails, but fibo() works.
fibo(); //it works here


//Anonymous function(a function without name)
// function(){
//     console.log('anonymous function');
// }

//its also a IIFE function
//The variation can be used by replacing “!” with “+”, “-”, or even “~” as well. Basically any unary operator can be used.
!function () {
    alert("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"

//this is also a IIFE (void is basically forcing the function to be treated as an expression.)
void function () {
    alert("Hello from IIFE!");
}();

//IIFE function with function calling () inside the main parenthesis
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
}(5));

//IIFE function with function calling () outside the main parenthesis
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

//when we can ommit the parenthesis from IIFE
var result = function () {
    return "From IIFE!";
}();
console.log(result);

//IIFEs and private variables (all the variable inside the IIFE will not accessed from outside the IIFE)
(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;

    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());

//Classical JavaScript module pattern (Private Varibles are accessible through the function)
var Sequence = (function sequenceIIFE() {

    // Private variable to store current counter value.
    var current = 0;

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function () {
            return current;
        },

        getNextValue: function () {
            current = current + 1;
            return current;
        }
    };

}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2
