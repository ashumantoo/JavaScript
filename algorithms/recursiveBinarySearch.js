/**
 * Binary Search Recursive: only works with the sorted array
 * Problem statement : Given an array of 'n' element and target element `t`, Find the index of `t` in the array.
 * return -1 if the target element not found.
 * 
 * ex = arr = [-5,2,4,6,10] , t = 6 -->should return 2
 *      arr = [4,8,10,23,56], t = 8 --< should reutrn 1
 */

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));