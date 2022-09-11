/**
 * Problem statement : Given an array of 'n' element and target element `t`, Find the index of `t` in the array.
 * return -1 if the target element not found.
 * 
 * ex = arr = [-5,2,10,4,6] , t = 10 -->should return 2
 *      arr = [10,4,8,23,56], t = 4 --< should reutrn 1
  */

function linearSearchInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchInArray([-5, 10, 5, 6, 9, 12], 9));