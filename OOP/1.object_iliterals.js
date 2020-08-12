// const s1 = 'Hello';
// console.log(s1.toUpperCase());

// const s2 = new String('Hello');
// console.log(s2.toUpperCase());

// console.log(window);
// console.log(window.navigator);
// console.log(navigator.appName);


//Object Literals
const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2020",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: "Book Two",
    author: "Harrish Joe",
    year: "2018",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.author);
console.log(book1.getSummary());
console.log(book2.author);
console.log(book2.getSummary());

//getting object all values
console.log(Object.values(book1));
//getting all keys of an object
console.log(Object.keys(book2));