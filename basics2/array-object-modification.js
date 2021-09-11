/** ==================== ARRAY AND OBJECT MANUPULATION ==============
 *   1. Best way to do manipulation of array and object in javascript
 *      is to make a copy first and do the manupulation.
 * 
 *   2. if there is n item in array and after manupulation we want n 
 *      item to be return then use map().
 *   3. if there is n item in array and after manupulation we want to
 *      return less than n item then use filter().
 */

// For arrays:
let nums = [1, 2, 3];
let newNums = [...nums]; // => [1, 2, 3]
console.log(nums === newNums) // => false! it's a new array

// For objects:
let person = {
  name: "Liz",
  age: 32
}
let newPerson = { ...person };
console.log(person === newPerson)// => false! it's a new object

// Internal properties are left alone:
let company = {
  name: "Foo Corp",
  people: [
    { name: "Joe" },
    { name: "Alice" }
  ]
}
//*** Note:- (...)spread operator only expand the first top level not the nested object inside a object
let newCompany = { ...company };
console.log(newCompany === company) // => false! not the same object
console.log(newCompany.people === company.people) // => true!


//========================== updating an object ==========================
const testobj = {
  clicks: 0,
  count: 0
}

const updatedTestObj = {
  ...testobj,
  clicks: testobj.clicks + 1,
  clunt: testobj.count - 1
}



//====================== update an object in an object ====================

const testObj2 = {
  house: {
    name: "Ravenclaw",
    points: 17
  }
};


// Two points for Ravenclaw
const updatedTestObj2 = {
  ...testObj2, // copy the testObj2 (level 0)
  house: {
    ...testObj2.house, // copy the nested object (level 1)
    points: testObj2.house.points + 2
  }
};

const testobj3 = {
  school: {
    name: "Hogwarts",
    house: {
      name: "Ravenclaw",
      points: 17
    }
  }
}

// Two points for Ravenclaw
const updatedTestobj3 = {
  ...testobj3, // copy the testobj3 (level 0)
  school: {
    ...testobj3.school, // copy level 1
    house: {         // replace testobj3.school.house...
      ...testobj3.school.house, // copy existing house properties
      points: testobj3.school.house.points + 2  // change a property
    }
  }
}


//======================== updating an object by key =========================
const testobj4 = {
  houses: {
    gryffindor: {
      points: 15
    },
    ravenclaw: {
      points: 18
    },
    hufflepuff: {
      points: 7
    },
    slytherin: {
      points: 5
    }
  }
};

// Add 3 points to Ravenclaw,
// when the name is stored in a variable
const key = "ravenclaw";
const updatedtestobj4 = {
  ...testobj4, // copy testobj4
  houses: {
    ...testobj4.houses, // copy houses
    [key]: {  // update one specific house (using Computed Property syntax)
      ...testobj4.houses[key],  // copy that specific house's properties
      points: testobj4.houses[key].points + 3   // update its `points` property
    }
  }
}


//===================== Prepend an item to an array ===========================
const testarray = [1, 2, 3];
const newItem = 0;
const updatedTestArray = [
  newItem,
  ...testarray
];

//===================== add an item to an array ================================
const testarray2 = [1, 2, 3];
const newItem2 = 4;
const updatedTestArray2 = [
  ...testarray2,
  newItem2
];

//another way an item to an array
const testarray3 = [1, 2, 3];
const newItem3 = 4;
const copyTestArray2 = testarray3.slice();
copyTestArray2.push(newItem3);


//===================== update an item in an array with map() ===================
const testarray4 = [1, 2, "X", 4];

const updatedTestArray4 = testarray4.map((item, index) => {
  // Replace "X" with 3
  // alternatively: you could look for a specific index
  if (item === "X") {
    return 3;
  }
  // Leave every other item unchanged
  return item;
})

//=================== Insert an item in the middle of the array ================
const testarray5 = [1, 2, 3, 5, 6];
const newItem5 = 4;
const copyTestArray5 = testarray5.slice();
copyTestArray5.splice(3, 0, newItem5);

//other way
const updatedTestArray5 = [     // make a new array
  ...testarray5.slice(0, 3),    // copy the first 3 items unchanged
  newItem5,                     // insert the new item
  ...testarray5.slice(3)        // copy the rest, starting at index 3 
]


//=================== Remove an item from array by filter() ===================
const testarray6 = [1, 2, "X", 4];

const updatedTestArray6 = testarray6.filter((item, index) => {
  // Remove item "X"
  // alternatively: you could look for a specific index
  if (item === "X") {
    return false;
  }

  // Every other item stays
  return true;
});