//Call by Value
/**========================================================================================================
 *  1. JavaScript has 5 data types that are copied by value: Boolean, null, undefined, String, and Number.
 *     We’ll call these primitive types.
 * 
 *  2. If a primitive type is assigned to a variable, we can think of that variable as containing the 
 *     primitive value.
 *=========================================================================================================*/

const x = 10;
const y = 20;
const z = 'abc'
/**=========================================================================================================
 *  1. When we assign these primitive type variables to other variables using =, we copy the value to the 
 *     new variable. They are copied by value.
 *    
 *  2. Both a and x now contain 10. Both b and y now contain 20 and Both z and c contain 'abc. They’re 
 *     separate, as the values themselves were copied.
 * 
 *  3. Changing one does not change the other. Think of the variables as having no relationship to each other.
 *==========================================================================================================*/
const a = x + 5; // adding 5 to x will change the value of a not the value of x
const b = y;
const c = z;

console.log('x =', x);
console.log('y =', y);
console.log('z =', z);
console.log('a =', a);
console.log('b =', b);
console.log('c =', c);


//call by Reference
/**===========================================================================================================
 *  1. JavaScript has 3 data types that are copied by having their reference copied: Array, Function, and
 *     Object. These are all technically Objects, so we’ll refer to them collectively as Objects.
 *
 *  2. Variables that are assigned a non-primitive value are given a reference to that value. That reference 
 *     points to the object’s location in memory. The variables don’t actually contain the value.
 *===========================================================================================================*/

const array = [];
array.push(1);
console.log(array);
