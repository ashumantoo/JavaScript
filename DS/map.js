/*******************************************************************************************************************
 *                                        MAP 
 * --- A MAP is a orderd collection of key-value pairs. Both key and value can be of any data type.
 * --- To retrive a value, we can use the corresponding key.
 * --- Maps are iterable and can be loop through using 'for...of' or 'forEach'
 * --- To create map we can use 'Map' constructor.
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

console.log(myMap);

console.log('-----------------------------------------------------------------')

//Iterating over the Map
for (const [key, value] of myMap) {
  console.log(`${key} --- ${value}`);
}

myMap.forEach((value, key) => {
  console.log(`${key} ---- ${JSON.stringify(value)}`);
})