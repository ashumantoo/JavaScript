/**
 * Prime Numbers = 1,2,3,5,7,11 .... 
 */

function isPrime(n) {
  if (n <= 1) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

//Find all prime numbers till given number
function primeNumber(n) {
  let primeNUmbers = [];
  for (let index = 1; index <= n; index++) {
    if (isPrime(index)) {
      primeNUmbers.push(index);
    }
  }
  return primeNUmbers;
}

console.log(primeNumber(13));