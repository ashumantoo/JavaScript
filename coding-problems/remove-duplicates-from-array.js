
//Brut force Method
function removeDuplicates(arr) {
  const result = [arr[0]];
  let firstEle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (firstEle !== arr[i]) {
      firstEle = arr[i];
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 4, 4, 5, 6, 7, 8]));


//Using new Set() DS
function removeDuplicatesUsingSet(numbers) {
  let result = new Set();
  for (let index = 0; index < numbers.length; index++) {
    const ele = numbers[index];
    if (!result.has(ele)) {
      result.add(ele);
    }
  }
  return result;
}
console.log(removeDuplicatesUsingSet([1, 2, 2, 4, 4, 5, 6, 7, 8]))