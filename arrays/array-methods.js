const notes = ['Note 1', 'Note 2', 'Note 3'];

//pop -> remove one element from the end of the array 
//push-> add single element from the end of the array
console.log(notes.pop());
notes.push('My new note');
console.log('1----->', notes);

//shift -> remove one element from the start of the array
//unshift -> add single element from the start of the array
console.log(notes.shift());
notes.unshift('My first note');
console.log('2---->', notes);

//splice-> remove element from the specified position and the no of element to be deleted
notes.splice(1, 1, 'This is the new second item');

notes[2] = 'This is now the new note 3';

console.log(notes.length);
console.log(notes[notes.length - 1]);
console.log('3---->', notes);

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

for (let count = 2; count >= 0; count--) {
  console.log(count);
}

for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}

for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  console.log(element);
}

const students = [
  {
    name: "Sonu Patel",
    age: 16,
    class: 10,
    subjects: ['Math', "Chemestry", "Physics"],
    address: {
      street: "5th Cross",
      city: "Patna",
      state: "Bihar",
      pincode: "800001",
      country: "India"
    }
  },
  {
    name: "Ajay Jadeja",
    age: 18,
    class: 12,
    subjects: ['Math', "Chemestry", "Biology"],
    address: {
      street: "10th Cross, Frazor Road",
      city: "Patna",
      state: "Bihar",
      pincode: "800001",
      country: "India"
    }
  },
  {
    name: "Rohit Verma",
    age: 15,
    class: 10,
    subjects: ['Math', "Chemestry", "Physics", "Biology", "History"],
    address: {
      street: "Barhariya",
      city: "Siwan",
      state: "Bihar",
      pincode: "841427",
      country: "India"
    }
  },
  {
    name: "Anil Sharma",
    age: 15,
    class: 10,
    subjects: ['Math', "Chemestry", "Physics", "Biology", "History"],
    address: {
      street: "Patna",
      city: "Patna",
      state: "Bihar",
      pincode: "800007",
      country: "India"
    }
  }
]

/********************************************** slice() *********************************************
 * 1. Returns a SHALLOW COPY of a portion of an array into a new array 
 * 2. This will not modify the original array
 * 3. Takes two optional parameter 'start' and 'end' represents the item index of the original array
 * 4. if we don't give the start and end index value for slice function, it will return the whole 
 *    array into a new array by permorming a shallow copy
 * 5. end index will not be included in the return array
 */
const studentFullCopy = students.slice();
// -1 represents the till the last element of the original array,which will be exclued in the returned array
const studnetAPortionCopy = students.slice(2, -1);
//index 2 item will be excluded from the return result
const studentPortioncopy2 = students.slice(0, 2);

// console.log("44444-------", studentFullCopy);
// console.log("55555-------", studnetAPortionCopy);
// console.log("66666-------", studentPortioncopy2)


/********************************************** concat() *********************************************
 * 1. Used to merge two or more arrays
 * 2. Returns a new array after merge, doesn't change or modify the original array
 * 3. Merge the array with duplicates data also - it will not remove the deplicates
 */
const fruits = ['Pineapple', 'Watermelon', 'Mango', 'Apple', 'Banana'];
const seasonalFruits = ['Cherry', 'BlueBerry', 'Lemon', 'Papaya'];
const freshFruites = ['Grapes', 'Guava', 'Apple', 'Cherry'];

const allTypeFruits = fruits.concat(seasonalFruits, freshFruites);
console.log("all Type Fruites ------", allTypeFruits);


/********************************************** splice() *********************************************
 * 1. Splice method changes the content of the original array by adding,removing,replaceing new element
 *    at the given index.
 * 2. takes two argument:
 *        a) start (required) -> Index of an element in the original array
 *        b) deleteCount (optional) -> The number of element to removed
 *        c) Item/Items to be added to the array (Optional)
 * 3. Modify the original array and returns an array containing deleted elements 
 * 
 * 4. A negative index for start(-2), counts the element from end of the array
 * 5. If start is omitted (and splice() is called with no arguments), nothing is deleted. 
 *    This is different from passing undefined, which is converted to 0.
 */

const vegetables = ['Potato', 'Tomato', 'Cabbage', 'Pumpkin', 'Brinjal', 'Garlic'];
const greenVegetables = ['Cabbage', 'Califlower', 'Palak', 'Corrinder Leaves', 'Green Peas'];

//Remove 0(Zero) element before index 2 and insert 'Beans';
const newVegetables = vegetables.splice(2, 0, 'Beans');
console.log("6666666------", newVegetables, vegetables); // newVegetables = [], no element removed, vegetables = ['Potato','Tomato','Beans','Cabbage','Pumpkin', 'Brinjal','Garlic']

//Remove 0 (zero) elements at last index, and insert "Raddish"
const newVegetables1 = vegetables.splice(vegetables.length, 0, 'Raddish');
console.log("777777-------", newVegetables1, vegetables); // newVegetables = [], no element removed, vegetables = ['Potato','Tomato','Beans','Cabbage','Pumpkin', 'Brinjal','Garlic','Raddish']

//Remove 2 element at index 2, and insert "Beetroot","Corn"
const newVegetables2 = vegetables.splice(2, 2, "Beetroot", "Corn");
console.log("88888--------", newVegetables2, vegetables); // newVegetables = ['Beans', 'Cabbage'], vegetables = ['Potato','Tomato','Beetroot','Corn','Pumpkin','Brinjal','Garlic','Raddish']


//Remove 1 element from index -2 -> negative index start deleting the element from end of the array
const newVegetables3 = vegetables.splice(-2, 1);
console.log("99999-------", newVegetables3);




/********************************************** reduced() *********************************************
 * 1. Takes two arguments - a callback function and a initialValue for accumultor
 * 2. Returns a single value after looping through all the elements of the array
 */

//Finding total of array elements
const numbers = [15, 16, 17, 18, 19];
let total = numbers.reduce((num, initialValue) => {
  return num + initialValue;
}, 0);
console.log(total);

//Sum of values in an object array
const arrayOfobjects = [{ x: 1, y: "abc" }, { x: 2, y: "xyz" }, { x: 3, y: "mnp" }, { x: 33, y: "def" }];
const sum = arrayOfobjects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6

/********************************************** some() *********************************************
 * 1. Test a condition added inside the callback function of the some mehtod.
 * 2. if any first element in the array satisfy the added condition it will return true, else returns false
 */

function isBiggerThan10(element, index, array) {
  console.log("array-------", array);
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false -> loop will run 5 times to check if any bigger than 10, element exists or not since there is no bigger number in the array, it will return false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true -> loop will run 1 time only since the condition got satisfy in the first iteration iself, it will return true


/********************************************** every() *****************************************************
 * 1. tests whether all elements in the array pass the test implemented by the provided function.
 * 2. If all the element in the array satisfy the condition, it will return TRUE, else FALSE will be returned
 */

//example tests whether all elements in the array are 10 or bigger
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


//Check if one array is a subset of another array
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


/********************************************** entries() *****************************************************
 * 1. returns a new array of object that contains the key/value pairs for each index in the array.
 */

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
