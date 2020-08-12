let myBook = {
    title: '1984',
    author: 'Ashutosh Kumar Mantoo',
    pageCount: 326
};

let otherBook = {
    title: 'A People History',
    author: 'Howard zinn',
    pageCount: 723
};

let getSummery = function (book) {
    return {
        summary: `${book.title} by ${book.title}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    };
};

let bookSummary = getSummery(myBook);
let otherBookSummary = getSummery(otherBook);

console.log(bookSummary, otherBookSummary);

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    };
};

let temp = convertFahrenheit(74);
console.log(temp);
