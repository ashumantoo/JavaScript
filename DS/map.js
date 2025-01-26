/*******************************************************************************************************************
 *                                        MAP 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * --- A MAP is an orderd collection of key-value pairs. Both key and value can be of any data type.
 * --- To retrive a value, we can use the corresponding key.
 * --- Maps are iterable and can be loop through using 'for...of' or 'forEach'
 * --- To create map we can use 'Map' constructor.
 * 
 *                    DIFFERENT OPERATRION THAT CAN BE PERFORMED ON MAP --> SEE EXAMPLE BELOW
 * --- A 2D Array can be transform into map using new Map() and passing 2D array to map constructor
 * --- A Map can be clone to another map
 * --- Two or more than Two Map can be merged into one, Maintaining the key Uniquness, The repeated key in the last map wins\
 * --- Map can be merged with an array, too.
 * 
 * --- Methods that we can use on a Map 
 *      - set()
 *      - size - it is not a method, no need to call this while getting the size of the map
 *      - clear()
 *      - delete()
 *      - has()
 *      - get()
 *      - keys()
 *      - values()
 *      - entries()
 *      - forEach()
 * 
 *                                    MAP vs OBJECT
 * --- Objects are unordered whereas MAPs are ordered. it's remember the order of insertion.
 * --- Keys in objects are only strings or symbool types whereas in MAPs key can be on any data type.
 * --- An object has a prototype and it may contain few default keys wherease in map we don't have any default keys
 * --- Objects are not iterables wherease MAPs are iterables.
 * --- In Objects apart from storing data we can attach function wherease in MAPs we can only store data.
 * 
 * *******************************************************************************************************************
 */

const myMap = new Map();
myMap.set('name', "Ashutosh Kumar Mantoo");
myMap.set('age', 30);
myMap.set('salay', 60000)
myMap.set('friends', ['Nitish', 'Mukhesh', 'Prem', 'Ranjan', 'Ritesh']);
myMap.set('address', { stree: "5th cross", city: "Bangalore", state: "Karnatka", zipcode: 560056, country: "India" });
myMap.set(10, 'this is a number');
myMap.set(NaN, "This is not a number"); //NaN can be used as a key in Map DS
myMap.set({}, "This is an empty object");

let keyfunction = function () { };

myMap.set(keyfunction, "This is a function definition");

//Accessing a value by key
console.log(myMap.get('name'));
console.log(myMap.get('address'));

//get size of map
console.log(myMap.size);

//Checking if a key exist in the map or not
console.log(myMap.has('friends'));

//delete a key from map
myMap.delete(10);

//clear the map
//myMap.clear()

// console.log(myMap);

console.log('-----------------------------------------------------------------')

//get all keys of the map
const allMyMapKeys = myMap.keys();
console.log("All myMap keys: ", allMyMapKeys);
for (const key of allMyMapKeys) {
  console.log("My Map key: ", key)
}

// //Get all values of the map
const allMyMapValues = myMap.values();
console.log("All myMap values: ", allMyMapValues);
for (const value of allMyMapValues) {
  console.log("My Map value: ", value);
}

//get all key value pairs as an iterables from the map that can be loop through using for...of
const allKeyValuePairs = myMap.entries();
// console.log("All key value pairs: ", allKeyValuePairs);

for (const [key, value] of allKeyValuePairs) {
  console.log(key, "____", value);
}

// //Iterating over the Map
for (const [key, value] of myMap) {
  console.log(`${key} --- ${value}`);
}

myMap.forEach((value, key) => {
  console.log(`${key} ---- ${JSON.stringify(value)}`);
})

console.log("_______________________________________________________________");
//Cloning the map
const original = new Map([[1, "one"]]);
const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)


//Maps can be merged, maintaining key uniqueness:
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


//Maps can be merged with Arrays, too:
const first1 = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second1 = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged1 = new Map([...first, ...second, [1, "un"]]);

console.log(merged1.get(1)); // un
console.log(merged1.get(2)); // dos
console.log(merged1.get(3)); // three

