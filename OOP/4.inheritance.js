//Book Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Magazine Constructor
function Magazine(title, author, year, month) {
    //inherit Book Property to Magazine
    Book.call(this, title, author, year);
    this.month = month;
};

//Inherit Prototype mehtod(it should always declared before object instance creating)
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Mangzine Object
const mag1 = new Magazine('Mag one', 'Jone doe', 2019, "Jan");

//use Mangazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);

