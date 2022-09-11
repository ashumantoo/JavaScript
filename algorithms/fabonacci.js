//Fabbonacci of a number N - array of sum of the two previous number
/** 0,1,1,2,3,5,8,13,21 .....
 * example 2 = [0,1]
 *         3 = [0,1,1]
 *         5 = [0,1,1,2,3]
 *         7 = [0,1,1,2,3,5,8]
 */

function fabonacci(n) {
  const fabi = [0, 1];
  for (let index = 2; index < n; index++) {
    fabi[index] = fabi[index - 1] + fabi[index - 2];
  }
  return fabi;
}

console.log(fabonacci(5));


function fabonacciByRecusion(n) {
  if (n <= 1) {
    return n;
  }
  return fabonacciByRecusion(n - 1) + fabonacciByRecusion(n - 2);
}

console.log(fabonacciByRecusion(5));