/**
 * Count the number of divisors of a positive integer n.
 * Examples : 
 *  4 --> 3 (1, 2, 4)
    5 --> 2 (1, 5)
    12 --> 6 (1, 2, 3, 4, 6, 12)
    30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
 */

function getDivisorsCounts(n) {
  let count = 0;
  let divisors = [];
  for (let index = 1; index < n + 1; index++) {
    if (n % index === 0) {
      count++
      divisors.push(index);
    }
  }
  return { count, divisors };
}
// console.log(getDivisorsCounts(12));

/**
 * 2.
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers 
 * between and including them and return it. If the two numbers are equal return a or b.
 * 
 * a and b are not ordered!
 * 
 * (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */
function getSum(a, b) {
  let array = [a, b];
  let max = Math.max.apply(Math, array);
  let min = Math.min.apply(Math, array);

  const n = (max - min + 1);
  const sum = n * (min + max) / 2;
  return sum;
}
// console.log(getSum(-1, 3));

/**
 * 3.
 * Your task is to make function, which returns the sum of a sequence of integers.
 * The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
 * If begin value is greater than the end, function should returns 0
 * 
 * Example
 * 2,2,2 --> 2
   2,6,2 --> 12 (2 + 4 + 6)
   1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
   1,5,3  --> 5 (1 + 4)
 */

function returnSumOfSequence(begin, end, step) {
  let sum = 0;
  if (begin > end) {
    return 0;
  }
  for (let index = begin; index <= end; index += step) {
    sum += index;
  }
  return sum;
}
// console.log(returnSumOfSequence(10, 8, 3))

/**
 * 4.
 * 
 */
function wave(string) {
  const newArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else {
      newArray.push(string.replace(string[i], string[i].toUpperCase()));
    }
  }
  return newArray;
}
console.log(wave("helo fr me"));

/**
 * 5.
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 * 
 * 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
 */
function MultiplicativePersistence(num) {
  function multiply(n) {
    return n.reduce(function (a, b) { return a * b; });
  }
  var count = 0;

  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count++;
  }
  return count;
}
console.log(MultiplicativePersistence(26))

/**
 * 6.
 */
function shortedWordLength(string) {
  const stringLength = [];
  string.split(" ").forEach(element => {
    stringLength.push(element.length);
  });
  return stringLength.sort((a, b) => a - b)[0];
}
console.log(shortedWordLength("Heelloo from me"));

/**
 * 7.
 */

function countSmileys(arr) {
  let count = 0;
  let smilesFaces = [":)", ":D", ";-D", ":~)"];
  arr.forEach((array) => {
    if (smilesFaces.includes(array)) {
      count++;
    }
  });
  return count;
}

/**
 * 8.
 */

 function incrementString (string) {  
  // Extract string's number
  var number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];
  // Store number's length
  var numberLength = number.length
  // Increment number by 1
  number = (parseInt(number) + 1).toString();
  // If there were leading 0s, add them again
  while (number.length < numberLength) {
    number = "0" + number;
  }
  return string.replace(/[0-9]/g, '').concat(number);
}
console.log(incrementString("foobar00099"));
