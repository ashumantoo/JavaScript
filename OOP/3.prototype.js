//Javascript Constructor function
//usefull for creating multiple instance of the same object
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    //this will be availble on the property of all Instance of the Book Constructor(Actually we don't want this behaviour)
    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};
//Instantiate an Object
const book1 = new Book('Book one', 'Jone Doe', 2020);
const book2 = new Book('Book Two', 'Johny Deep', 2018);

console.log(book1.getSummary());
console.log(book2.getAge());
console.log(book2);
book2.revise(2020);
console.log(book2);