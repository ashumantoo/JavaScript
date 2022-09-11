//creating object using object literals
const car = {
  make: "Maruti",
  model: "swift desire",
  year: "2020",
  color: "red",
  type: "SUV",
  start: function () {
    return `${this.make} ${this.model} has been started`;
  },
  stop: function () {
    return `${this.make} ${this.model} has been stopped`;
  },
  getAge: function () {
    const age = new Date().getFullYear() - this.year
    return `${age} years old`;
  }
}

console.log(car);
console.log(car.getAge());