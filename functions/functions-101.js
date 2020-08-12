//Functions - input , code , output (return value)

let greetUser = function () {
    console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

//Declaring the function
let square = function (num) {
    let result = num * num;
    console.log(result);
};

let returnSquareResult = function (num) {
    let result = num * num;
    return result;
};


//Calling the function
square(3);
let squareResult = returnSquareResult(10);
console.log(squareResult);


let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
