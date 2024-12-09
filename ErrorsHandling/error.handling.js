/**========================================================================================================
 *                          ERROR HANDLING IN JAVASCRIPT
 * EXCEPTION - Is the unexpected condition that occurs during the runtime or during execution of a program.
 * EXCEPTION HANDLING - Handling those unexpected condition of a program is known as EXCEPTION HANDLING OR 
 *                      ERROR HANDLING.
 *=========================================================================================================*/

//The Error Object
console.log("start");

const myError = new Error('some problem here in code');
console.log(myError.message); //here this won't stop the execution of the code

console.log("finish");


//Throwing and Handling Errors
/* 1. When Errors gets thrown, then the script will stop executing,unless you 
 *    handle it in your process by using try catch block
 */

const a = 5;
// console.log(b); here execution will stop , will not to console.log(a)

try {
  console.log(b); //b is not defined, so throws an error
} catch (error) {
  console.log(error); //will log the error with the error stack
}

console.log(a); // still gets executed


//finally
const aa = 55

try {
  console.log(bb) // bb is not defined, so throws an error
} catch (err) {
  console.error(err) // will log the error with the error stack
} finally {
  console.log(aa) // will always get executed
}



//Error in callbacks
/**
 * When handling asynchronous functions with callbacks, you usually receive two 
 * parameters in your callback function, which look something like this:
 */
myAsyncFunc(someInput, (err, result) => {
  if (err) return console.error(err) // we will see later what to do with the error object.
  console.log(result)
});


//promise
//Always use catch block in promise
Promise.resolve(1)
  .then(res => {
    console.log(res) // 1

    throw new Error('something went wrong')

    return Promise.resolve(2)
  })
  .then(res => {
    console.log(res) // will not get executed
  })
  .catch(err => {
    console.error(err) // we will see what to do with it later
    return Promise.resolve(3)
  })
  .then(res => {
    console.log(res) // 3
  })
  .catch(err => {
    // in case in the previous block occurs another error
    console.error(err)
  });



//async await (use try...catch block)
;(async function () { //IIFE
  try {
    await someFuncThatThrowsAnError()
  } catch (err) {
    console.error(err) // we will make sense of that later
  }

  console.log('Easy!') // will get executed
})();
