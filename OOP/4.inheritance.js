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

//Inherit Book Prototype mehtods to Mangazine(it should always declared before object instance creating)
Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.getPublisher = function (publisher) {
    return `${this.title} published by ${publisher}`;
}

function Novel(title, author, year, month, date, type) {
    //inherit Magazine property to the Novel
    Magazine.call(this, title, author, year, month);
    this.date = date;
    this.type = type;
}

Novel.prototype = Object.create(Magazine.prototype);
Novel.prototype.getPublishedDate = function () {
    return `Published date : ${this.date}-${this.month}-${this.year}`;
}

//Instantiate Mangzine Object
const mag1 = new Magazine('Mag one', 'Jone doe', 2019, "Jan");

//use Mangazine constructor
Magazine.prototype.constructor = Magazine;
// console.log(mag1);
// console.log(mag1.getPublisher("Test"));

Novel.prototype.constructor = Novel;
const noval1 = new Novel("11 Minutes", "Paulo Cholelo", "2011", "March", "11", "Romantic/Drama");
console.log(noval1)
console.log(noval1.getPublishedDate())

