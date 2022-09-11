/**--------------------- Merge Sort --------------------------------
 * -- Merge Sort Idea
 *    - Divide the array into sub arrays, each containing only one element(an array with one element considered to be sorted)
 *    - Repeatedlly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining.
 *      That will be sorted array.
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex); //left array would be from start to the middle element but middle element not included
  const rightArr = arr.slice(midIndex); // right array wouble be from middle element to the last element in the array
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

//Big-O = O(nlogn)