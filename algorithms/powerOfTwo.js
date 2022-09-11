//check if a number is power of 2
// ex - 4 = 2^2

function powerOfTwo(n) {
  if (n <= 1) {
    return false
  }
  for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
      return true
    } else {
      return false;
    }
    n = n / 2;
  }
}

console.log(powerOfTwo(32));