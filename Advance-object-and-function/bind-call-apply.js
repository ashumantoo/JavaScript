/**
 * Bind , call and apply javascript function on object
 */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! Im ' + this.name + ', Im a ' + this.job + ', and Im ' + this.age + ' years old');
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
john.presentation.call(emily, 'friendly', 'afternoon');


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
 */
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
