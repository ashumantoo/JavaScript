/**
 * Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
 * 
 * Note: Two consecutive equal values are considered to be sorted.
 * 
 * Example 1:
      Input:
      N = 5, array[] = {1,2,3,4,5}
      Output
      : True.
 */

function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        return false
      }
    }
  }
  return true;
}

console.log(isArraySorted([2, 4, 6, 0, 5]));