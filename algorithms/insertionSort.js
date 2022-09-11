/**
 * ----------------INSERSION SORT -------------------------
 * Insersion sort Idea:
 *   --> Virtually split the array into a sorted and an unsorted array
 *   --> Assume that the first element is already sorted and remaining elements are unsorted
 *   --> Select an unsorted element and compare it with all element in the sorted array
 *   --> If the element in the sorted part is smaller than the selected element, procced to the next element in the unsorted part.
 *       else shift larger element in the sorted part towards the right
 *   --> Insert the selected at the right index
 *   --> Repeat till all the unsorted elements are placed at the right order
 */

function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let j = index - 1; //already sorted element(s)
    while (j >= 0 && numberToInsert < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}


function decendingInsertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let j = index - 1;
    while (j >= 0 && numberToInsert > arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
const arr = [8, 20, -6, 4, -2];
// console.log(insertionSort(arr));
console.log(decendingInsertionSort(arr));