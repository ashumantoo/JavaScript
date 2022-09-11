/**
 * Binary Search : only works with the sorted array
 * Problem statement : Given an array of 'n' element and target element `t`, Find the index of `t` in the array.
 * return -1 if the target element not found.
 * 
 * ex = arr = [-5,2,4,6,10] , t = 6 -->should return 2
 *      arr = [4,8,10,23,56], t = 8 --< should reutrn 1
 */

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));