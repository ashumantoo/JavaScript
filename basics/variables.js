// 1. You can't define a variable mor than once
let petName = 'Hal';
// let petName = 'Bob';

petName = 'Spot';
console.log(petName);

// 2. There are rules related to variables names
//    start with alphabets,_ or $ only.
//    can only be used alphabets and number and _ and $ sign

let test_ = 2;
let result = 3 + 4;

// 3. Variables names can not be reserved keywords
// let let = 12 

/**
 *  Understanding primitive variable behaviour 
 */

let name = "Ashutosh Mantoo";
let age = 28;
let isMerried = true;

console.log(name, "-", age, "-", isMerried);
console.log(typeof name, "-", typeof age, "-", typeof isMerried);

name = "somename";
name.lastName = "someLast";

// Undefined --because here name is just primitive string type, 
//it's not an object and we can not create a property on name same way - number and boolean type also works
console.log(name.lastName);

//converting name --> from Primitive type string to String object 
name = new String("Ashu");
//assigning a property to the name object called nickname (since 
//now name is an object we can assign a property to the object)
name.nickname = 'Mantoo';

console.log(name.nickname);