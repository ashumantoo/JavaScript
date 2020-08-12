let myBook = {
    title: '1984',
    author: 'Ashutosh Kumar Mantoo',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(myBook);

myInfo = {
    name: 'Ashutosh Kumar Mantoo',
    age: 27,
    location: 'India'
};

let info = `${myInfo.name} is ${myInfo.age} years old and lives in ${myInfo.location}`;
console.log(info);

myInfo.age = myInfo.age + 1;
let againInfo = `${myInfo.name} is ${myInfo.age} years old and lives in ${myInfo.location}`;

console.log(againInfo);