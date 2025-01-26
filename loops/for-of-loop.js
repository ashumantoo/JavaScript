/******************************** for of loop ************************************
 * 1. for ... of loop iterates over the iterables
 * 2. iterables can be - an Array, a string ,a Set, a Map, on function arguments, and Typed array etc
 * 3. By using this loop we only gets the values of the iterable --> INDEX OF THE ITEM WILL NOT GET
 * 4. To get the item VALUE AND INDEX we need to use entries() on the iterator or use the normal for loop 
 */
const arr = [20, 10, 4, "Ashutosh", "Apple", undefined, null, { name: "Mantoo" }];

const sampleStr = "Learn Javascript Loop";

const numbers = [20, 40, 80, 160, 320];

const mapDSIterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const setDSIterable = new Set([1, 1, 2, 2, 3, 3]);

for (let item of arr) {
  console.log("Mixed Array items: ", item);
}

for (let item of sampleStr) {
  console.log("String Chars ", item)
}

for (let item of numbers) {
  console.log("Numbers item ", item)
}

for (let [key, item] of numbers.entries()) {
  console.log("Numbers item key and value: ", key, item);
}


for (let item of mapDSIterable) {
  console.log("Map DS item ", item)
}

for (let [key, item] of mapDSIterable) {
  console.log("Map DS item with Key & Value ", key, item)
}

for (let item of setDSIterable) {
  console.log("Set DS item ", item)
}

//Iterating over the arguments object
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3