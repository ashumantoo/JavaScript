//find the factorial of a number N
//factorial of 1 = 1;
//             2 = 2*1
//             3 = 3*2*1
//             4 = 4*3*2*1
//             5 = 5*4*3*2*1
function factorial(n) {
  let factorial = 1;
  for (let index = 2; index <= n; index++) {
    factorial = factorial * index;
  }
  console.log(factorial);
}

// factorial(5);


function recursiveFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));