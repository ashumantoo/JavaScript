/***************************************************************************************************************************
 *                                     This keyword in JS (Implicit Binding)
 *  --- In normal function definition the 'this' keyword points to the object in which the function 
 *      is defined.
 * 
 *  --- In arrow function definition the 'this' keyword points to the parent function 'this' (i.e the parent function object)
 * 
 */

console.log(this); //window/Global object


/*********************************************************************************************************
 * --- Both 'let' and 'var' variables, if declared at the top level of a script, are accessible outside
 *     of the script file. However, only 'var' variable get assinged to the "window" object.
 * 
 * --- In below examples getValue() and getValueArrowFn() are defined under the window/global object thats
 *     why "this" inside those functions will point to the global/window object
 */
var a = 10;
let b = 15;
const c = 20;

//this = window object
console.log(this.a); //10
console.log(this.b); //undefined
console.log(this.c); //undefined
console.log('*************************************')


var x = 100;
let y = 200;
const z = 300;

function getValue() {
  //this = window object
  console.log(this.x); //100
  console.log(this.y); //undefined
  console.log(this.z); //undefined
}
getValue();


const getValueArrowFn = () => {
  //this = parent object = window object
  console.log("Arrow fn x: ", this.x); //100
  console.log("Arrow fn y: ", this.y); //undefined
  console.log("Arrow fn z: ", this.z); //undefined
}
getValueArrowFn();


const employee = {
  name: "Ajay Sharma",
  age: 45,
  salary: 150000,
  address: {
    street: "5th Cross, 7th Main",
    city: "Bangalore",
    state: "Karnatka",
    country: "India",
    zipcode: '560075'
  },
  getSalary: function () {
    //this = employee object
    return `Salary of ${this.name} is : ${this.salary}`; // this.name = Ajay Sharma and this.salary = 150000
  },
  getSalaryArrow: () => {
    //this = parent function object = parent function getSalayArrow() and this for function = global object
    const anotherArrowFn = () => {
      console.log("Another arrow fn: ", this.age);
    }
    anotherArrowFn();

    //this = parent object = global object
    return `Salary of ${this.name} is : ${this.salary}`; // this.name and this.salary = undefined
  },
  childObj: {
    getSalary: function () {
      //this = child object
      return `Salary of ${this.name} is : ${this.salary}`; // this.name and this.salary = undefined
    },
    getSalaryArrow: () => {
      //this = parent function object = parent function is Global execution context  = global object
      return `Salary of ${this.name} is : ${this.salary}`; // this.name = Ajay Sharma and this.salary = 150000
    }
  },
  getDetails: function () {
    const getSalaryArrow = () => {
      //this = parent function object = getDetails() is parent function = employee object
      return `Salary of ${this.name} is : ${this.salary}`; // this.name = Ajay Sharma and this.salary = 150000
    }
    const salaryInfo = getSalaryArrow();
    console.log("Salary info: ", salaryInfo);
  }
}

employee.getSalaryArrow();
console.log('**************************************')


/***************************************************************************************************************
 *  --- this keyword with class and constructor
 * 
 *  --- with class and constructor the this will always point to the calling object - here it's newUser obj
 * 
 */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getNameArrowFn = () => {
    return this.name;
  }
}

const newUser = new User("Ravi", 24);
console.log(newUser.getName());
console.log(newUser.getNameArrowFn());



/*****************************************************************************************************************
 *                                       OUTPUT BASED QUESTIONS
 * Q1.What is the result of accessing its ref? Why? 
 */

function makeUser() {
  return {
    name: "Ashutosh",
    ref: this
  }
}

const user1 = makeUser();
// what will be the output - undefined because here we are calling makeUser(), which is point to the global object
console.log(user1.ref.name);


//How we can fix this- this

function makeNewUser() {
  return {
    name: "Mantoo",
    ref: function () {
      return this;
    }
  }
}
const user2 = makeNewUser();
console.log("User2 name: ", user2.ref().name);


/*****************************************************************************************************************
 * Q2. "this' keyword with setTimeOut - what will be the output
 * 
 */

const person = {
  name: "Mohit",
  logMessage() {
    //this 
    console.log(`Hello, ${this.name}`);//undefined
  }
}

// here setTimeout, treating person.logMessage as a callback rather than a method and since it's running independently
// this inside the logMessage() will point to the global object instead of the person object
setTimeout(person.logMessage, 1000);
//To fix the above issue we need to do this
setTimeout(() => {
  person.logMessage();
}, 1000);


/***************************************************************************************************************
 * Q3. Create a simple calculator
 * 
 */

let calculator = {
  read() {
    // this.a = +prompt("a= ", 0); // using + to convert string to number
    // this.b = +prompt("b= ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  multipley() {
    return this.a * this.b;
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.multipley());



/******************************************************************************************************************
 * Q4. Implement this function const result = calc.add(10).mutiply(5).substract(30).divide(10)
 *                             console.log(result.total)
 * 
 */

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total *= b;
    return this;
  },
  substract(c) {
    this.total -= c;
    return this;
  },
  divide(d) {
    this.total /= d;
    return this;
  }
}

const result = calc.add(10).multiply(5).substract(10).divide(5);
console.log(result.total);
