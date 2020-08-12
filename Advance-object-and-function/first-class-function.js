/*=======================================================================================
 *                     FIRST CLASS FUNCTION
 *   It means a function -
 *               1. can be stored in a varible
 *               2. can be passed as arguments to fucntions
 *               3. can be returned by functions
 *               4. can be stored in some data structures
 *               5. can be hold their own property and methods
 *
 * ======================================================================================*/

/**======================================================================================
 *                       Attribues of a first class function
 *=======================================================================================*/
// Function definition and invocation
function speak(string) {
    console.log(string);
}
speak("Hello");                     // logs "Hello"

// Store in a variable
var talk = speak;
talk("Hi");                         // logs "Hi"

// Pass as an argument to a function
// Return from a function
function functionReturner(fn) {
    return fn;
}
var chat = functionReturner(talk);
chat("Good Morning");               // logs "Good Morning"

// Store in a data structure
var myFuncs = [talk];
myFuncs[0]("Good Afternoon");       // logs "Good Afternoon"

// Owns properties
talk.myProperty = "bananas";
console.log(talk.myProperty);       // logs "bananas"


/**======================================================================================
  *                      Uses of a First-Class Function
  *=======================================================================================*/


// 1. Higher Order Functions (function takes function as argument)
var myNums = [1, 2, 3, 4, 5];

function doubleNum(num) {
    return num * 2;
}

var doubledNums = myNums.map(function (num) {
    return num * 2;
});
console.log(doubledNums);           // logs "[2, 4, 6, 8, 10]"

var otherDoubledNums = myNums.map(doubleNum);
console.log(otherDoubledNums);      // logs "[2, 4, 6, 8, 10]"


// 2. Partial Function Application (function returns function)
function applicator(fn, val) {
    return function () {
        fn(val);
    };
}

function speak(string) {
    console.log(string);
}

var sayHello = applicator(speak, "Hello");
sayHello();                         // logs "Hello";
var sayGoodBye = applicator(speak, "Good Bye, see you!");
sayGoodBye();

// 3. during doing asynchronous call by callbacks
function calculateAvg(arr,totalNo,callback){
  console.log(arr,totalNo);
  let sum =0;
  for(let i = 0; i< arr.length; i++){
    sum = sum + arr[i];
  }
  callback(sum,totalNo);
}

function avg(sum,count){
  console.log(sum/count);
  return sum/count;
}

calculateAvg([10,20,30,40,50],5,avg);
