/////////////////////////////////////////
// Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 20, 40, 50);
console.log(sum1);

//ES5
var ages = [18, 20, 40, 50];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//==========================================================================
//ES6 
//spreat operator on array
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anna'];

const bigFamily = [...familySmith, ...familyMiller];
const bigFamily1 = [...familySmith, 'Jonas', ...familyMiller];

console.log(bigFamily);
console.log(bigFamily1);

const users = [
  { name: "user1", email: 'user1@gmail.com', password: "pass123", gender: "Male" },
  { name: "user2", email: 'user2@gmail.com', password: "pass123", gender: "Female" },
  { name: "user3", email: 'user3@gmail.com', password: "pass123", gender: "Male" }
];

const newUser = {
  name: "user3",
  email: 'user3@gmail.com',
  password: "pass123",
  gender: "Male"
};

const newUsers = [...users, {...newUser}];

console.log('users-->', users);
console.log('newUser-->', newUser);
console.log('newUsers-->', newUsers);


//=========================================================================
//spread operator on object
const celebrity = {
  name: "Tom Cruise",
  occupation: "actor",
};

const celebrityInfo = {
  age: 45,
  country: "USA"
};

const combinedObj = { ...celebrity, ...celebrityInfo };

// console.log('celebrity -->', celebrity);
// console.log('celebrityInfo -->', celebrityInfo);
// console.log('combinedCelebrity -->', combinedObj);

const changeCelebrityInfo = {
  ...celebrityInfo,
  age: 50,
  country: "America"
}

const newCelebrityInfo = {
  age: 48,
  country: "Uniated state of America"
}

const modifyObjImmutableWay = {
  ...celebrityInfo,
  ...newCelebrityInfo
}

console.log('celebrity -->', celebrity);
console.log('celebrityInfo -->', celebrityInfo);
console.log('changeCelebrityInfo -->', changeCelebrityInfo);
console.log('Modify Object Immutable way -->', modifyObjImmutableWay);
console.log('combinedCelebrity -->', combinedObj);