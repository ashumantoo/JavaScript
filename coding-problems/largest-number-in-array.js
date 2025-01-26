/**
 * Problem Statement: Given an array, we have to find the largest element in the array.
 * Example 1:
    Input:
    arr[] = {2,5,1,3,0};
    Output:
    5
    Explanation:
    5 is the largest element in the array. 

    Example2:
    Input:
    arr[] = {8,10,5,7,9};
    Output:
    10
    Explanation:
    10 is the largest element in the array. 
 */

function largestNumberInArray(arr) {
  let maxNum = arr[0];
  for (let index = 1; index < arr.length; index++) {
    const ele = arr[index];
    if (maxNum < ele) {
      maxNum = ele;
    }
    return maxNum;
  }
}

console.log(largestNumberInArray([2, 5, 1, 3, 0]));