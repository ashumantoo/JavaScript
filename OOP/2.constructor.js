//Javascript Constructor function
//usefull for creating multiple instance of the same object
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    //this will be availble on the property of all Instance of the Book Constructor(Actually we don't want this behaviour)
    //for this actually we need prototype property of the object
    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}

//Instantiate an Object
const book1 = new Book('Book one', 'Jone Doe', 2020);
const book2 = new Book('Book Two', 'Johny Deep', 2018);

console.log(book1);
console.log(book2);