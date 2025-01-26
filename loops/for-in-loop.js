/******************************** for in loop ************************************
 * 1. for ... in loop iterates over the string properties of iterables
 * 2. iterables can be - an Array, a string , object etc
 */

const arr = [20, 10, 4, "Ashutosh", "Apple", undefined, null, { name: "Mantoo" }];

const person = {
  name: "Rohit",
  age: 38,
  address: "5th cross main road new delhi",
  mobile: 9090909090
}

const sampleString = "Javascript";

for (let key in arr) {
  console.log("arr Item key ", key, arr[key]);
}

for (let key in person) {
  console.log("Person Obj Item ", key, person[key])
}

for (let key in sampleString) {
  console.log("Sample string key ", key);
  console.log("Sameple string value", sampleString[key])
}