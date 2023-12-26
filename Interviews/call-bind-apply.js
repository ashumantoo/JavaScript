/****************************************************************************************************************
 *                                      CALL, APPLY, BIND (Explicit binding)
 *  Blog Link: https://dev.to/thesanjeevsharma/call-apply-and-bind-in-javascript-2nno
 * 
 *  --> The call() method calls a function with a given 'this' (the object on which call function is applied) value 
 *     and arguments provided individually.
 * 
 * --> The call() allows for a function/method belonging to one object to be assigned and called for a different 
 *     object.
 * 
 *  Syntax - function.call (thisArg , arg1 , arg2 ....), 
 * 
 * ---------------------------------------------------------------------------------------------------------------
 * * --> The apply() method calls a function with a given this value, and arguments provides as an 
 *     array( or an array like object).
 * 
 * --> While the syntax of apply function is almost identical to that of call(), the fundamental
 *     difference is that call() accepts an argument list, while apply() accepts a single array of
 *     arguments.
 * 
 * --> When the first argument is undefined or null a similar outcome can be achieved using the array spread syntax.
 * 
 * -----------------------------------------------------------------------------------------------------------------
 * --> The bind() method creates a new function that, when called, has its this keyword set to the provided value
 *      with a given sequences of arguments preceding any provided when the new function is called.
 * 
 *  --> As we know, the bind() method creates copy of the function which we can store in a variable and again we 
 *      can call that variable as function according to our need.
 * 
 *  --> The bind() method also allow us to preset some arguments, in like below code - presentation method on the john object
 *      require two argument " 'style' and 'timeOfDay'". but here we are just passing one argument and other argument we are
 *      passing at the time of calling function stored inside variable.
 */

const personObj = {
  firstName: 'Sanjeev',
  lastName: 'Sharma',
  age: 22,
  getIntro: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
  }
}

function randomFunc() {
  console.log(this);
}

randomFunc(); // window object


function personIntro(city, state) {
  console.log(`${this.name} is from ${city}, ${state}`);
}

const person1 = {
  name: "Rahul Dev",
  firstName: "Rahul",
  lastName: "Dev",
  age: 28
}

const person2 = {
  name: "Rajiv",
  age: 30
}

const person3 = {
  name: "Mayank Agrawal",
  firstName: "Mayank",
  lastName: "Agrawal",
  age: 40
}


personIntro.call(person1, 'Patna', 'Bihar'); //Rahul Dev is from Patna, Bihar
personIntro.call(person2, 'Indore', 'Madhya Pradesh'); //Rajiv is from Indore, Madhya Pradesh

personObj.getIntro(); // "Sanjeev Sharma is 22 years old."
personObj.getIntro.call(person1); // "Rahul Dev is 28 years old."

personIntro.apply(person3, ['Siwan', 'Bihar']); //Mayank Agrawal is from Siwan, Bihar
personObj.getIntro.apply(person3) //Mayank Agrawal is 40 years old.


const getIntroMessage = personIntro.bind(person1, 'Banaglore', 'Karnatka');
getIntroMessage();


/***********************************************************************************************************
 *                             OUTPUT BASED QUESTIONS
 * Q1. Call printAnimals such that it prints all animal in the object
 *  
 * const animals = [
      { species: "Lion", name: "Kind" },
      { species: "Whale", name: "Queen" }
    ]

    function printAnimals(i) {
      this.print = function () {
        console.log(`#${i} ${this.species}: ${this.name}`);
      }

      this.print();
    }
 * 
 */


const animals = [
  { species: "Lion", name: "Kind" },
  { species: "Whale", name: "Queen" }
]

function printAnimals(i) {
  this.print = function () {
    console.log(`#${i} ${this.species}: ${this.name}`);
  }

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  printAnimals.call(animal, i);
}



/***************************************************************************************
 *  Q2. Append an array to another array without using concat() or for loop
 *  const array1 = ["a", "b", "c"];
    const array2 = [1, 2, 3];
 */

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];

array1.push.apply(array1, array2);
console.log(array1);


/***************************************************************************************
 * Q3. Find min/max number in the array without using loop (Using apply() to enhance the in built functions)
 * 
 */

const numbers = [8, 12, 3, 5, 10, 45];

//Loop based algorithms to calculate min/max of an array
let min = +Infinity;
let max = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
  if (numbers[i] < min) {
    min = numbers[i]
  }
}
console.log({ min, max });

//Using apply() to find min and max in an array
console.log(Math.min.apply(null, numbers)); //min = 3
console.log(Math.max.apply(null, numbers)); //max = 45


/**********************************************************************************************************
 * Q4. Bound Function
 * 
 */
function f() {
  console.log(this) // this = window object = because value for this in f() is fixed to window object
}

const user = {
  g: f.bind(null)
}

user.g();


/************************************************************************************************************
 *  Q5. Bind Chaining
 * --- Once a function is bind to a particular object it will always bind to that particular object. as here
 *     in the below example a() will always bind to the object {name:"Jonh"}. even if we chain multiple bind
 *     method on the function, there will be no effect of those bind object.
 */

function a() {
  console.log(this.name) // John
}

a = a.bind({ name: "John" }).bind({ name: "Wick" });
a();


/*************************************************************************************************************
 *  Q6. Explicit Binding with arrow function
 * 
 *  --- Arrow function regardless of it's being called itself or call(),bind() and apply(). we can not manupulate
 *      the context('this') of the arrow function.
 */

const age = 10;

const person = {
  name: "Ashutosh",
  age: 20,
  getAgeArrow: () => console.log(this.age), // this = window object
  getAge: function () {
    console.log(this.age);
  }
}

const newPerson1 = { age: 24 };

person.getAge.call(newPerson1); // 24
person.getAgeArrow.call(newPerson1); //undefined


/**********************************************************************************************************
 *                         POLYFILLS FOR CALL,BIND AND APPLY
 * 
 */

let car = {
  color: "Red",
  company: "BMW"
}

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`)
}


Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(`${this} is not callable`);
  }
  context.fn = this;
  context.fn(...args);
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(`${this} is not callable`);
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called a non-object")
  }
  context.fn = this;
  context.fn(...args);
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(`${this} can not be bound as it is not callable`);
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

// purchaseCar.call(car, '₹', 5000000)
// purchaseCar.myCall(car, '₹', 5000000);
// purchaseCar.myApply(car, ['₹', 5000000]);
const purchase = purchaseCar.myBind(car, '₹');
purchase(5000000);
