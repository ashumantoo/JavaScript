/******************************************************************************************************
 *                      Array - Big O Time complexity
 *  1. Insert/Remove from end of array => O(1) - CONSTANT
 *  2. Insert/Remove from begining     => O(n) - LINEAR
 *  3. Access by index                 => O(1) - CONSTANT
 *  4. Search                          => O(n) - LINEAR  (Possible to found item at the last index)
 *  5. Built In Methods:-
 *        - Shift, Unshift, concat, slice, splice => O(n) - LINEAR
 *        - forEach, map, reduce, filter          => O(n) - LINEAR
 * 
 * ****************************************************************************************************
 */

//  - Array in JS can contain similar type of data or can also contain mix type of data
const employeNames = ["Ashok", "Pulkit", "Vinod", "Manoj"]; //String data type
const numbers = [1, 2, 3, 4, 5, 6]; // number type
//Object type
const employees = [
  { name: "Ashok", salary: 20000 },
  { name: "Pulkit", salary: 40000 }
]
//Mix data type containing array as an element
const person = ["Ashutosh", 30, ['Watching Movies', 'Playing cricket']];

//Mix data type
const list = [10, 20, 30, 40, 50, "Ashutosh", false];

const itemAt3rdIndex = list[3]; //40 - index start with 0

//insert at the end of array
list.push(null);

//remove from end of the array
list.pop();

//insert at the start of the array
list.unshift(5);

//remove from start of the array
list.shift();

// console.log(list);

//Loop through the array
for (const item of list) {
  console.log("for of", item);
}

for (let i = 0; i < list.length; i++) {
  console.log("for", list[i]);
}