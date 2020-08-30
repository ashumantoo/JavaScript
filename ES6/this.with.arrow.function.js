/**=================================================================================
 *                              'this' WITH ARROW FUNCTION
 *  1. 'this' is just a object
 *  2. it's refers the object which is calling it
 *  3. In ES6 arrow function - its uses the concept of lexical scoping, so in this case
 *     it also refers the object from his surroundings area.
 * 
 ==================================================================================*/



console.log(this); //global - window object
function returnName(name) {
  console.log(this); //global - window object
  return name;
}
console.log(returnName('Ashutosh'));

var person = {
  firstName: "John",
  lastName: "Depp",
  age: 27,
  profession: "Teaching",
  fullName: function () {
    console.log(this); // person object
    return this.firstName + ' ' + this.lastName;
  }
};
console.log(person.fullName());

var newPerson = {
  firstName: "Harry",
  lastName: "Potter",
  age: 30,
  profession: "Reader",
  fullName: function (books) {
    console.log(this); // newPerson object

    // var bookArray = books.map(function (book) {
    // console.log(this); // global - window object
    //   return " I am " + this.firstName + ' ' + this.lastName + " and I have alread " +
    //     ' read books - ' + book;
    // });

    //to refer the same object in both places we need to bind the map function declartion
    // or use ES6 arrow function
    var bookArray = books.map(function (book) {
      console.log(this); // newPerson object
      return " I am " + this.firstName + ' ' + this.lastName + " and I have alread " +
        ' read books - ' + book;
    }.bind(this));
    console.log(bookArray);
  }
}

const books = ['harryPotter', 'War and Peace', 'Lolita', 'Halmet', 'Crime and Punishment'];
newPerson.fullName(books);


//ES6 Arrow function
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
const returnPrimeNumbers = () => {
  console.log(this); //global - window object
  return primeNumbers.map(number => {
    if (number < 10)
      return number;
  });
}
console.log(returnPrimeNumbers());

var newPerson2 = {
  firstName: "Jenny",
  lastName: "Hawkings",
  age: 26,
  profession: "Reader",
  fullName: function (books) {
    console.log(this); // newPerson object
    var bookArray = books.map((book) => {
      console.log(this); // newPerson object
      return " I am " + this.firstName + ' ' + this.lastName + " and I have alread " +
        ' read books - ' + book;
    }); //without bind method.
    console.log(bookArray);
  }
};

newPerson2.fullName(books);