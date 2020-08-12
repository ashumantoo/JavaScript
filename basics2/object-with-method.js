/*************************************
*Objects and Methods
*/

var john = {
  firstName : 'John',
  lastName : 'Smith',
  birthYear:1990,
  family : ['Jane','Mark','Bob','Emaily'],
  job:'Teacher',
  isMarried:false,
  calcAge:function () {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);

//Challenge

var johnObject = {
  firstName : 'John',
  lastName : 'Smith',
  mass : 65,
  height: 2.2,
  calculateBMI : function () {
    this.bmi = this.mass/(this.height * this.height);
  }
};

var markObject = {
  firstName : 'Mark',
  lastName : 'Bow',
  mass : 72,
  height: 2.5,
  calculateBMI : function () {
    this.bmi = this.mass/(this.height * this.height);
  }
};
johnObject.calculateBMI();
console.log(johnObject);

markObject.calculateBMI();
console.log(markObject);

if (johnObject.bmi > markObject.bmi) {
  console.log(johnObject.firstName + ' BMI is greater by ' + (johnObject.bmi - markObject.bmi));
}else if (johnObject.bmi < markObject.bmi) {
  console.log(markObject.firstName + ' BMI is greater by ' + (markObject.bmi - johnObject.bmi));
}else {
  console.log('there is a tie between them');
}
