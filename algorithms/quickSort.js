/**--------------------------------QUICK SORT--------------------------
 * Quick Sort Idea:
 *    -- Identify the pivot element in the array
 *       - Pick first element as pivot
 *       - Pick last element as pivot (Our Approach)
 *       - Pick a random element as pivot
 *       - Pick median as pivot
 *   
 *   -- After that Put everything that's smaller than the pivot into a left array and everything that's greater than the pivot
 *      into a right array.
 *   -- Repeat the process for the individual left and right array till you have an array of length 1, which is sorted by definition
 *   -- Repeateddly concatenate the left array, the pivot and the right array till one sorted array remains 
 */

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] < pivot) {
      leftArr.push(arr[index])
    } else {
      rightArr.push(arr[index]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

function decendingQuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > pivot) {
      leftArr.push(arr[index])
    } else {
      rightArr.push(arr[index]);
    }
  }
  return [...decendingQuickSort(leftArr), pivot, ...decendingQuickSort(rightArr)];
}

const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));
console.log(decendingQuickSort(arr));

//Worst case - O(n^2
//Average case - O(logn)