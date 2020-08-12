// Primitives vs Objects
/**
 * Primitives - Number,Strings,Boolean,null and undefined are primitives
 * 
 *            - variables defined by using the primitives actually holds the data inside of a
 *              variable itself. 
 *            - variables passed to the function as a parameter has copy of the variables 
 *              so the change in the value of that variable inside the function does not affect
 *              the original value of the variable.
 *             
 * 
 * Objects - Except Number,Strings,Boolean,Null and Undefined all are objects
 * 
 *         - Variables associated with the objects do not actually contain the object
 *           But instead it contains a reference to the place in the memory where the objects sits.
 *           or where the object is stored.
 * 
 *         - A variable declared as an object does not have real copy of the object. it is just
 *           points to the objects.
 * 
 *         - Object passed to a function as a parameter does not have a copy of the object instead it has just
 *           the reference of the passed object. so change in the value of the passed object also change 
 *           the value of the original object.
 */

//Primitive variables
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Libson'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);




