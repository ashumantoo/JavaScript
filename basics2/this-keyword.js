/*****************************************
* This Keyword
*/

/*
- This keyword in the Global execution context is simply the window object
- Window Object is the default Object in javascript
*/
// console.log(this); //window

//regular function call
// In regular function call this keyword refereces to the window object
// caluclateAge(1993);

//Regular function
function caluclateAge(year) {
  console.log(2019 - year);
  console.log(this); //window
}

var john = {
  name : 'John',
  yearOfBirth: 1990,
  caluclateAge : function () {
    console.log("Outer: ",this); // here this keyword referece to the object that called the method i.e. - the john Object
    console.log(2019 - this.yearOfBirth);
   
    function innerFunction() {
      console.log("Inner: ",this); // here this keyword referece to the window object because this is a regular function call
    }
    innerFunction();
  }

};

// john.caluclateAge();

var mike = {
  name : 'mike',
  yearOfBirth: 1994
};

// mike.caluclateAge = john.caluclateAge;
// mike.caluclateAge(); //This will show the mike object


//-------------------------------------------------------------------------------------------------------------------
function hello() {
  console.log(this) //Global window object
}

const newHello = () => {
  console.log(this); //Global window object: arrow function will take the value of 'this' from their outer world which is window object only
}

const person = {
  fname: "Ashutosh",
  lname: "Mantoo",
  age: 30,
  getName: function() {
    console.log("Name-------",this); //Person object
    //Inner function
    function sayHI() {
      //This - Global object
      console.log(`HI ...${this.fname} from normal function`) //this.fname = undefined
    }
    
    let sayHIArrow = () => {
      //this - person object bcoz it is an arrow function and it's scope defined to the parent object
      console.log(`Hi ....${this.fname} from arrow function`)
    }
    sayHI();
    sayHIArrow();
  },
  getFullName: () => {
    console.log("++++++++++", this); //Global object due to the lexical scoping
    console.log(this.fname) //undefined since here person object did not exits in global window object
  }
}

// hello()
// newHello();
// person.getName();
// person.getFullName();
