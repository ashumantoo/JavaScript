/*******************************************************************************************************
 *                                              CLOSURES
 * VIDEO LINK : https://www.youtube.com/watch?v=sZjlEKbaykc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=4
 * MOZILA DOCUMENT LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * Blog Link :https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions
 * Blog Link* : https://betterprogramming.pub/javascript-closures-and-curried-functions-63c75bcded11
 * 
 * --- A closure is a function that can access and manipulate the variables that are defined outside of
 *     of it's own scope, even if the outer function has returned.
 * 
 * --- In Javascript a closure gets created everytime a function is created during the function creation
 *     time.
 * 
 * --- Closure gives you the capability to create private variables and function in Javascript without using
 *     the OOPS(means without using class) - example of this will stack data structure implentation
 * 
 */

//Example 1 (Lexical scope)
function init() {
  let name = "Ashutosh"; //name is a local variable created by init function
  function dispalyName() {
    // displayName() is the inner function, that forms the closure
    console.log(name) //use variable declared in the parent function (outer function)
  }
  dispalyName();
}

init();


//Example 2 (Closure)
/*********************************************************************************************************
 * --- Generally in other programing language once a function completes their execution, the local variable
 *     used inside the function are gets destroyed.
 * 
 * --- But this is not the case in Javascript, Due to the Closure, the Inner function keep the reference of
 *     all it's outer scope (Parents variables and reference)
 * 
 * --- That's the reason,in the below given exmple, we able to access name variable even after the displayName()
 *     get returned.
 */
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


//Example 3
function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12
const add5And2 = makeAdder(5)(2); //we can also call like this 
console.log(add5And2);


/*******************************************************************************************************************
 *                                         Closure scope chain
 * --- Every closure has three scopes:
 *      1. Local scope (Own scope)
 *      2. Enclosing scope (can be block, function, or module scope)
 *      3. Global scope
 * 
 * --- closures have access to all outer function scopes, Global scope as well
 */

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20


/********************************************************************************************************************
 * --- Closures in case of the block-scoped variable
 * --- Here in below given example - y is a block-scope variable that is not accessible out side it's scope but
 *     it can be accessible from the inner function getY()
 */
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();



/********************************************************************************************************************
 * Output based Questions
 */

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); //1 due to the block-scope(override the outer count)
  }
  console.log(count); //0 due block-scope inner count is not accessible, here the outer count is accessible
})()


/**
 * Write a function to allow you to do this
 * let addSix = createBase(6)
 * addSix(10) //16
 * addSix(21) //27
 * 
 * */
function createBase(x) {
  return function (y) {
    return x + y;
  }
}
let addSix = createBase(6);
console.log(addSix(10));

/**
 * Time optimization
 */

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time('6')
// find(6)
// console.timeEnd('6')
// console.time("12")
// find(12)
// console.timeEnd('12')

//Optimized code using closures
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  }
}

const closure = find();
console.time('6')
closure(6)
console.timeEnd('6')
console.time("12")
closure(12)
console.timeEnd('12')


/*******************************************************************************************************
 * Problem inside the loop with var keyword
 */

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      //console.log(i); //what is looged here, the output will be 3,3,3, due to the var which is not a block-scope variable
    }, i * 1000)
  }
}

a();

//How to print 0,1,2 - to do that we can use let instead or we can use closures
function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      //console.log(i); //0,1,2 - because using let will create 3 different scope and latter after setTimeout completes
      // it will assign the value accordingly which will be 0,1,2
    }, i * 1000);
  }
}
b();

//With Closures
for (let i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i)
}


/**********************************************************************************************************************
 * How will you use to create private variable using closures
 * 
 */

function counter() {
  let _counter = 0; //This is the private variable, that can only be modify by using the provided function

  function add(increment) {
    _counter += increment;
  }

  function getCounter() {
    return `Counter = ${_counter}`;
  }

  return {
    add,
    getCounter
  }
}

const c = counter();
c.add(10);
c.add(20);
console.log(c.getCounter()) //30

/**********************************************************************************************************************
 * Module Pattern
 * 
 */
let Module = (function () {
  function privateMethod() {
    console.log("Private Method - will not be accessible outside")
  }

  return {
    publicMethod: function () {
      console.log("Public method-- can be used to modify the private method")
    }
  }
}
)();

Module.publicMethod();


//Make this runs only once
/**
 * let name;
 * function displayTheName(){
 *  name = "Ashutosh"
 *  console.log("name",name);
 * }
 * 
 * displaytheName();
 */

let name;
function displayTheName() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("name displayed already")
    } else {
      name = "Ashutosh";
      console.log("Name is ", name);
      called++
    }
  }
}

const getName = displayTheName();
getName()
getName();
getName();
getName();
getName();
getName();


//Implement the Caching/Memoize function
const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) { }
  return num1 * num2;
}

console.time("First call");
console.log(clumsySquare(9467, 7649))
console.timeEnd('First call')

console.time("Second call");
console.log(clumsySquare(9467, 7649))
console.timeEnd('Second call')


function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    let argsChache = JSON.stringify(args);
    if (!res[argsChache]) {
      res[argsChache] = fn.call(context || this, ...args);
    }
    return res[argsChache];
  }
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) { }
  return num1 * num2;
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);
console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649))
console.timeEnd('First call')

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649))
console.timeEnd('Second call')