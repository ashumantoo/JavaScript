const s1 = 'Hello';
console.log(s1.toUpperCase());

const s2 = new String('Hello');
console.log(s2.toUpperCase());

// console.log(window);
// console.log(window.navigator);
// console.log(navigator.appName);


//Object Literals
const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2020",
    getSummary: function () {
        // console.log("this---",this) //this = book1 object
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log("here this",this); //this = window object

const book2 = {
    title: "Book Two",
    author: "Harrish Joe",
    year: "2018",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

/**
 * Now here the book1/book2 object :
 * 1. created from the built-in Object constructor that is in Object constructor prototype
 * 2. this will call something like this
 *    const book1 = new Object();
 *    const book2 = new Object();
 */

// console.log(book1.author);
// console.log(book1.getSummary());
// console.log(book2.author);
// console.log(book2.getSummary());

//getting object all values
// console.log(Object.values(book1));
// //getting all keys of an object
// console.log(Object.keys(book2));