/**
 * Bind , call and apply javascript function on object
 */

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', Im a ' + this.job + ', and Im ' + this.age + ' years old');
    } else if (style === 'friendly') {
      console.log('Hey!  whats up? Im ' + this.name + ', Im a ' + this.job + ', and Im ' + this.age + ' years old');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

/** 
 * --> The call() method calls a function with a given 'this' (the object on which call function is applied) value 
 *     and arguments provided individually.
 * 
 * --> The call() allows for a function/method belonging to one object to be assigned and called for a different 
 *     object.
 * 
 * Syntax - function.call (thisArg , arg1 , arg2 ....)
*/
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');  //  <--- here the 'this' is emily object itself


/**
 * --> The apply() method calls a function with a given this value, and arguments provides as an 
 *     array( or an array like object).
 * 
 * --> While the syntax of apply function is almost identical to that of call(), the fundamental
 *     difference is that call() accepts an argument list, while apply() accepts a single array of
 *     arguments.
 * 
 * --> When the first argument is undefined or null a similar outcome can be achieved using the array spread syntax.
 */
john.presentation.apply(emily, ['friendly', 'afternoon']);

/**
 *  --> The bind() method creates a new function that, when called, has its this keyword set to the provided value
 *      with a given sequences of arguments preceding any provided when the new function is called.
 * 
 *  --> As we know, the bind() method creates copy of the function which we can store in a variable and again we 
 *      can call that variable as function according to our need.
 * 
 *  --> The bind() method also allow us to preset some arguments, in like below code - presentation method on the john object
 *      require two argument " 'style' and 'timeOfDay'". but here we are just passing one argument and other argument we are
 *      passing at the time of calling function stored inside variable.
 */
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');




//An Real Life example of the bind() method

var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalculate(array, fun) {
  var resultArray = [];
  for (var index = 0; index < array.length; index++) {
    resultArray.push(fun(array[index]));
  }
  return resultArray;
}

function calculateAge(element) {
  return 2019 - element;
}

//Let's Assume, in Japan for a person to be full age , the person age must be 20ys
//thus here instead of setting age by default 18 years , we will pass a second argument
// to the isfullAge function, and that argument will be 'limit' 
function isFullAge(limit, element) {
  // return element >= 18;
  return element >= limit;
}


//here the problem is - 'isFullAge' function which will execute inside the 'arrayCalculate' function
//but there we are just passing a sigle argument to the isFullAge function but in isFullAge function
//definition we have defined that it will take two argument, one is limit and other one is element.

//thus, some how we needs to pass a default value for the limit , and that can be done by
//using bind() method. where we can set some preset value as a parameter.
var ages = arrayCalculate(years, calculateAge);

var bindFullAgeJapan = arrayCalculate(ages, isFullAge.bind(this, 20));
console.log('ages --->', ages);
console.log('fullAges --->', bindFullAgeJapan);