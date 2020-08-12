////////////////////////////////////////////////
// Classes

//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'Teacher');
console.log(john5);
john5.calculateAge();


//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //we can define static method in ES6 which is associated with the class not with the object
    static greetings() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'Teacher');
console.log(john6);
john6.calculateAge();
Person6.greetings();

