/*****************************************
* This Keyword
*/

/*
- This keyword in the Global execution context is simply the window object
- Window Object is the default Object in javascript
*/
console.log(this);

//regular function call
// In regular function call this keyword refereces to the window object
caluclateAge(1993);

//Regular function
function caluclateAge(year) {
  console.log(2019 - year);
  console.log(this);
}

var john = {
  name : 'John',
  yearOfBirth: 1990,
  caluclateAge : function () {
    console.log(this); // here this keyword referece to the object that called the method i.e. - the john Object
    console.log(2019 - this.yearOfBirth);
   /*
    function innerFunction() {
      console.log(this); // here this keyword referece to the window object because this is a regular function call
    }
    innerFunction();
    */
  }

};

john.caluclateAge();

var mike = {
  name : 'mike',
  yearOfBirth: 1994
};

mike.caluclateAge = john.caluclateAge;
mike.caluclateAge();
