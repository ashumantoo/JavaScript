//Javascript class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static getTopBook() {
        return "Harry Pooter";
    }
}

//Instantiate Object
const book1 = new Book('Book one', 'jonh Doe', 2020);
console.log(book1);
book1.revise(2021);
console.log(book1);

//Calling static method directly on the class
console.log(Book.getTopBook());


