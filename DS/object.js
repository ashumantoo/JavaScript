
/*************************************************************************************************
 * --- Build In methods on Object
 *     1. Object.keys()    => Give all the keys of the object as an array
 *     2. Object.values()  => Give all the values of the object as an array
 *     3. Object.entries() => Give all the key-value pair as an object
 * 
 *                              OBJECT - Big O Time Complexisty
 *     1. Insert           => O(1) - CONSTANT
 *     2. Remove           => O(1) - CONSTANT
 *     3. Access           => O(1) - CONSTANT
 *     4. Search           => O(n) - LINEAR
 *     5. Object.keys()    => O(n) - LINEAR
 *     6. Object.values()  => O(n) - LINEAR
 *     7. Object.entries() => O(n) - LINEAR
 * ***********************************************************************************************
 **/

const person = {
  name: "Jason",
  age: 40,
  "first_company": "Google",
  getName: () => {
    //here this is undefined becaue of array function which support lixical scoping (scope from parent)
    console.log(this.name);
  },
  sayName: function () {
    console.log(this.name);
  }
}

person.hobbies = "Football"; //Adding a new property
delete person.hobbies;  //Deleting a property

console.log(person);
//Accessing the property
console.log(person.name); // Dot notation
console.log(person['age']) // Bracket notation 
console.log(person['first_company']) // Bracket notations can be used to access property name with sapce

//Accessing the function from object
person.getName();
person.sayName();

//Get all the keys of the an array
console.log(Object.keys(person)); // ["name","age","first_company","getName",sayName]

//Get all the values of the object
console.log(Object.values(person)); // ["Jason",40,"Google", function definition, fun definition]


//Get the key value pair of the array
console.log(Object.entries(person));
/**
 * [
 *  ["name":"Jason"],
 *  ["age":40],
 *  ["first_company","Google"],
 *  ["getName":"funcion definition"]
 * ]
 */