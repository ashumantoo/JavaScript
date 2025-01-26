/**
 * https://leetcode.com/problems/majority-element/description/
 * 
 * Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Example 1:
    Input: nums = [3,2,3]
    Output: 3

    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
 */

//Method 0: using sorting the array and middle element will the result;
function majorityElement0(nums) {
  nums.sort();
  console.log("---------", nums.sort())
  return nums[Math.max((nums.length - 1) / 2)];
}

//Method 1: Using Hash Map - 
function majorityElement1(nums) {
  let condition = nums.length / 2;
  const resultMap = new Map();
  let count;
  for (let i = 0; i < nums.length; i++) {
    if (!resultMap.has(nums[i])) {
      count = 1;
      resultMap.set(nums[i], count);
    } else {
      resultMap.set(nums[i], count);
      count++;
    }
  }
  let result;
  for (const [key, value] of resultMap.entries()) {
    if (value > condition) {
      result = key;
    }
  }
  return result;
}


//MOORE'S VOTING ALGORITHMS - TIME AND SPACE COMPLEXISTY
function majorityElement2(nums) {
  let majority = nums[0];
  let votesCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (votesCount === 0) {
      majority = nums[i];
      votesCount++;
    } else if (majority === nums[i]) {
      votesCount++
    } else {
      votesCount--
    }
  }
  return majority;
}

const input0 = [2, 2, 1, 1, 1, 2, 2];
const input1 = [2, 2, 1, 1, 1, 2, 2];
const input2 = [2, 2, 1, 1, 1, 2, 2];
console.log("Result0 --->", majorityElement0(input0));
console.log("Result1 --->", majorityElement1(input1));
console.log("Result2 --->", majorityElement2(input2));