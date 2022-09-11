/**
 * Given an array of integers, sort the array
 * const arr = [-6,20,8,-2,4];
 * Bubble sort should return = [-6,-2,4,8,20]
 * 
 * --> Bubble sort Idea:
 *     - Compare adjecent elements in the array and swap the posistion if they are not in the intended order
 *     - Repeat the instruction as you step through each element in the array
 *     - Once you step through each element of the array with no swap, the array is sorted
 */

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
// const arr = [-6, 20, 8, -2, 4];
// bubbleSort(arr)
// console.log(arr);

function decendingBubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index + 1] > arr[index]) {
        let temp = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(decendingBubbleSort([-6, 20, 8, -2, 4]));
//Big-O = O(n^2)