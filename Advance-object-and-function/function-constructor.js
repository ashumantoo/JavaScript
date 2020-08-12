
/*Object created by using the literals
    var john = {
        name: 'Jonh',
        yearOfBirth: 1990,
        job: 'teacher'
    };
*/

// Person Function Constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    };
};

const Vehicle = function (name, model, color, year, brand) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.Brand = brand;
};

Vehicle.prototype.displayName = function (name) {
    console.log('Vehice name is ' + name);
}
const Car = function (name, model, color, year, brand, wheel) {
    Vehicle.call(this, name, model, color, year, brand);
    this.wheel = wheel;
};

//We can also add method to the person constructor function using prototype object properties
Person.prototype.otherFunction = function () {
    console.log('From the Other function');
};

//We can also add new properties to the person constructor function
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1993, 'designer');
var mark = new Person('Mark', 1985, 'driver');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

john.otherFunction();
mark.otherFunction();
jane.otherFunction();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// console.log(john);
// console.log(jane);
// console.log(mark);

const vehicle1 = new Vehicle('Desire', 'SZ-DRS', 'Silver', 2019, 'Suzuki');
const car1 = new Car('Desire', 'SZ-DRS', 'Silver', 2019, 'Suzuki', 4);
console.log(vehicle1.displayName);
console.log(car1);



