/******************************************************************************************************
 * Video Link : https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2&t=8s
 *                                       map
 * --- map method on array is used to create a new array from the existing one
 *     by applying a function to each and every element of the existing array.
 * 
 * --- It does not execute the function for empty element
 * 
 * --- Does not change the originla array
 * 
 * --- Parameters - It takes 2 parameter
 *     1) A callback function(REQUIRED) - Agarin the callback function can take 3 parameters
 *        a) current element (REQUIRED)
 *        b) index (OPTIONAL)
 *        C) arr (OPTIONAL) - This is the original array
 *     2) thisValue - Optional, Default "undefined", A value paases to the function as its "this" value
 * 
 */

const numbers = [1, 2, 3, 4, 5];
const multiplyByTwo = numbers.map((num) => {
  return num * 2;
});
console.log(multiplyByTwo); //array in which elelemtn of the original array multiply by 2
console.log(numbers); //<-- Original array 

//**************************************** Polifill of map function ******************************************
Array.prototype.myMap = function (cb) {
  //here this will refere to the array on which are going to appy this method e.g. - numbers.myMap
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(cb(this[i], i, this));
  }
  return tempArr;
}
const multiplyByThree = numbers.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiplyByThree);
console.log(numbers);


/*******************************************************************************************************
 *                                    filter
 * --- The filter method creates a new array with the elemented that are passses
 *     the condition provided by the callback function
 * 
 * --- It does not execute the functon for empty elements
 * 
 * --- It does not change the original array
 * 
 * --- Parameters - It takes 2 parameter
 *     1) A callback function(REQUIRED) - Agarin the callback function can take 3 parameters
 *        a) current element (REQUIRED)
 *        b) index (OPTIONAL)
 *        C) arr (OPTIONAL) - This is the original array
 *     2) thisValue - Optional, Default "undefined", A value paases to the function as its "this" value
 * 
 * ---Returns an array of the elements that are passes the condition if not no element passes the condition
 *    then it's return the empty array. 
 */

const evenNumbers = [2, 4, 6, 8, 10, 12, 14];
const evenNumberGreaterThan10 = evenNumbers.filter((num, i, arr) => {
  return num > 10;
});

console.log(evenNumberGreaterThan10);
console.log(evenNumbers);

//**************************************** Polifill of filter function ******************************************
Array.prototype.myFilter = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    //filter only returns those element that are satisfy the callback condition -that's why we have added that
    //check in the if condition
    if (cb(this[i], i, this)) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
}

const evenNumberGreaterThan6 = evenNumbers.myFilter((num, i, arr) => {
  return num > 6;
});
console.log(evenNumberGreaterThan6)


/******************************************************************************************************
 *                                            reduce
 * --- the reduce methods reduces the array down to the just one value that is the accumulated result 
 *     of function
 * 
 * --- this method execute a reducer function for each and every element
 * 
 * --- this method does not execute the function for empty array elements
 * 
 * --- this method does not chagne the original array
 * 
 * --- returns the accumulated result from the last call of the callback function
 * 
 * --- accValue - is the result after every call of the callback function
 * --- cuurent - is the current element of the original array
 */

const sumOfEvenNumbers = evenNumbers.reduce((accValue, current) => {
  return accValue + current;
}, 0);
console.log(sumOfEvenNumbers);

//**************************************** Polifill of reduce function ******************************************
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator;
}

const mySumOfEvenNumbers = evenNumbers.myReduce((acc, current) => {
  return acc + current;
}, 0);
console.log(mySumOfEvenNumbers);



/****************************************************************************************************************
 *                                          map VS forEach
 * --- map return a new array wherease forEach does not return anything it's just iterate over the array
 * --- map does not modify the original array
 * --- on map we can chain other array mehtods like filter,reduce etc but on forEach we can not do that
 */

const multipleOfThree = [6, 9, 12, 15, 18];
const divideByThree = multipleOfThree.map((num) => {
  return num / 3;
});
console.log("Divide by three ", divideByThree);

multipleOfThree.forEach((num, i) => {
  //this will modify the original array
  multipleOfThree[i] = num / 3;
});


const students = [
  { name: "Deepak", rollNumber: 31, marks: 65 },
  { name: "Mohit", rollNumber: 25, marks: 89 },
  { name: "Radha", rollNumber: 39, marks: 88 },
  { name: "Vinay", rollNumber: 22, marks: 78 }
]

const totalMarks = students.reduce((acc, currentElement) => {
  return acc + currentElement.marks;
}, 0);
console.log("Total Marks ", totalMarks);

//Return only name of those students who has scored more than 80
const filteredStudent = students.filter((sut, i, arr) => sut.marks > 80).map((sut) => sut.name);
console.log(filteredStudent);