//Find the 2nd largest number in an given array

function getSecondLargestNumberInArray(nums) {
  const n = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);
  let result;
  for (let i = n - 2; i > 0; i--) {
    if (sortedNums[i] !== sortedNums[n - 1]) {
      result = sortedNums[i];
      return result;
    } else {
      return -1;
    }
  }
}


const numsArr = [11, 7, 21, 32,32, 10];

const result = getSecondLargestNumberInArray(numsArr);
console.log(result);