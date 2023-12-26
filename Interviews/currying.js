/*****************************************************************************************************
 *                                       CURRING FUNCTION
 * ---Video Link : https://www.youtube.com/watch?v=k5TC9i5HonI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=5
 * ---Blog Link : https://betterprogramming.pub/javascript-closures-and-curried-functions-63c75bcded11
 * 
 * --- Curring is a technique in which a function takes one arguments at a time and returns a new function expecting
 *     the next argument
 * 
 * --- It is a conversion of function call from f(a,b) to f(a)(b).
 * 
 * --- Currying is application of Closure.
 * 
 * --- Why curring is usefull :-
 *     1. To create a higher order functions
 *        a) Higher order Function - A higher-order function is simply a function that takes a function 
 *           as an argument or returns a function as a result, and it may or may not be curried.
 * 
 *        b) currying Function - A curried function, is one that returns a function as its result. 
 *           Note that a curried function is necessarily a higher-order function, since it returns a function as its result
 * 
 *    2. Currying helps you avoid passing the same variable again and again.
 * 
 *    3. It makes a function pure which makes it expose to less errors and side effects.
 * 
 *    4. Currying can be used to manipluate the DOM as well
 * 
 */

//Example 1. sum(10,20) to sum(10)(20)
function sum(a, b) {
  return a + b;
}
console.log("Normal sum ", sum(10, 20))

//Here the argument a - no need to pass it again ana again
function curryingSum(a) {
  return function (b) {
    return a + b;
  }
}

const sum1 = curryingSum(10);
console.log("Currying sum ", sum1(20));

console.log("sum 2 ", curryingSum(15)(25));


/*******************************************************************************
 *                      OUTPUT BASED QUESTIONS
 * Question 1. Implement a function that can be called like add(3)(6)(4) //13
 * 
 */

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
console.log(add(3)(6)(4))


/**
 * Question 2 - 
 *  evaluate("sum")(4)(2) => 6
 *  evaluate("substract")(10)(2) => 8
 *  evaluate("multiply")(4)(3) => 12
 *  evaluate("divide")(15)(5) => 3
 */
function evaluate(operator) {
  return function (a) {
    return function (b) {
      if (operator === 'add') {
        return a + b;
      } else if (operator === 'substract') {
        return a - b;
      } else if (operator === 'multiply') {
        return a * b;
      } else {
        return a / b;
      }
    }
  }
}
console.log(evaluate('substract')(20)(8));
console.log(evaluate('multiply')(20)(8));

const divide = evaluate('divide');
console.log(divide(30)(5))
console.log(divide(20)(4))


/**
 * Question 3 - 
 * Infinite currying -> sum(1)(2)(3)(4)(5)(6).....(n)
 */
function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    return a;
  }
}
console.log(infiniteSum(1)(2)(3)(4)());


/*******************************************************************************************************************
 *                                            Currying vs Partial Application
 * 
 * --- Currying function , the number of returned nested fucntion is same as the number of argument provided.
 *     but in partial application, the returned nested function can be less than the number of argument provided.
 *    
 * */

//currying function - no of returned function is 3 and no of argement is also 3
function multipley(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    }
  }
}

//Partial application - Here the function is doing the same thing but no of return function is 2 and no of argument is 3
// This is the partial application of currying function
function partialMultiply(a) {
  return function (b, c) {
    return a * b * c;
  }
}


/*********************************************************************************************************************
 *                                    DOM Manipulation using currying
 * 
 */

function updateElementText(elementId) {
  return function (content) {
    document.querySelector(`#${elementId}`).textContent = content;
  }
}

const updateHeader = updateElementText("headingText");
updateHeader("Hello from Mantoo");
updateHeader("Hi How are your, Ashutosh");


//3 will be use let instead of var
for (var index = 0; index < 5; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
  //1
  // (function (index) {
  //   setTimeout(() => {
  //     console.log(index)
  //   }, 1000)
  // })(index)

  //2
  // function print(index) {
  //   setTimeout(() => {
  //     console.log(index)
  //   }, 1000);
  // }
  // print(index)
}