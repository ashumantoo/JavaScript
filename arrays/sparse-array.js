/**************************************************** DENSE ARRAY **********************************************
 * Normal array Or Dense Array 
 * 1. A dense array is an array where the elements are all sequential starting at index 0.
 * 2. For normal array, the length property of the array accurately specify the number of elements in the array
 */

const arr = [1, 2, 3, 4, 5];
console.log(arr.length) //5


/**************************************************** SPARSE ARRAY **********************************************
 * 1. A sparse array is one in which the elements are not sequential, and they don't always start at 0.
 * 2. They are essentially Arrays with "holes", or gaps in the sequence of their indices.
 */

const sparseArr = [];
sparseArr[100] = "Empty space now exists";
//101, length of the array is 101, but only one actual element i.e "Empty space now exists". rest are the empty spaces
//The length property on an Array takes the last element's index and adds one
console.log(sparseArr.length); //101, last element index = 100 + 1 = 101


//way of creating sparse array
//by using new Array()
const newSparseArr = new Array(10); //array initialized with no elements, all are empty spaces
console.log(newSparseArr.length) //10

//By inserting a key/value at certain index of the array
const newSparseArr1 = [];
newSparseArr1[50] = "Some data";
console.log(newSparseArr1.length) //51

//By using the delete oprator
const newSparseArr2 = [10, 20, 30, 40, 50, 60];
delete newSparseArr2[0];
console.log(newSparseArr2.length) //6 -> even after deleting one element the array has the same length;

//By assigning empty index value
const newSparseArr3 = [10, , , , , , 20, , 30, 40];
console.log(newSparseArr3.length); //10