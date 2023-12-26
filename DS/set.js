/**************************************************************************************
 *                              SET
 * --- In JS, SET is a data structure(it's an Object) that can hold a collection of UNIQUE values.
 * --- SET can contains a mix of different data types. We can store string,number, boolean and objects
 * --- SETs are dynamically sized. So we don't have to declare the size of the set before creating it.
 * --- SETs don't maintain the insertion order
 * --- SETs are iteraables, and can be loop through with for of loop
 * --- To create a SET we can use the "set" constructor.
 * 
 *                          ARRAY vs SET
 * --- Arrays can contain duplicates values, wherase sets can not.
 * --- Insertion order is maintained in Array but it is not the case in SETs
 * --- Searching and Deleting in the SET is faster than the array
 */


const mySet = new Set();

//Adding element to the set
mySet.add('apple');
mySet.add('Mango');
mySet.add('Orange');
mySet.add(false);
mySet.add({ name: "ashuotsh", age: 30, isTeacher: false });


//In built methods
//Checking element existance
console.log(mySet.has('apple'));

//deleting the element
mySet.delete(false);

//Size of the set
console.log(mySet.size);

//Clear the set
// mySet.clear()

//Looping through the set
for (const item of mySet) {
  console.log(item)
}
console.log(mySet);
console.log('---------------------------------------------')
//We can convert a set to an array by using Array.from() or spread operator
let newArray = Array.from(mySet);
let newArray2 = [...mySet];

console.log(newArray);
console.log(newArray2);


/*********************************************************************************************************************
 *   Sets are especially useful when you need to store a collection of unique values 
 *   and perform operations like union, intersection, and difference between sets.
 **********************************************************************************************************************/
let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);

// Union
let unionSet = new Set([...set1, ...set2]);

// Intersection
let intersectionSet = new Set([...set1].filter(value => set2.has(value)));

// Difference
let differenceSet = new Set([...set1].filter(value => !set2.has(value)));

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log(unionSet);
console.log(intersectionSet)
console.log(differenceSet)