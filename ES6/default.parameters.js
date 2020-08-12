////////////////////////////////////////////////
// Default Parameters


/**
 * Any Arguments of a function if we want to be pre set the we can use the default parameter
 */

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    //Pre setting the default parameters
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // just giving the two args rest args values are set to be undefined
// because we didn't provide the args during the call of the function.
console.log(john);

//ES6
function Car(name, model, wheel, launchYear = '2018') {
    this.name = name;
    this.model = model;
    this.wheel = wheel;
    this.launchYear = launchYear;
}

var Desire = new Car('maruti Desire', 'MD1001', 4);
console.log(Desire);
