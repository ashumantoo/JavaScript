/******************************************************************************************************************
 * Problem statement
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.

      Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

      Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]

      Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]
 * 
 */


//Mehtod 1 - time complexity 0n2
const TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [j, i];
      }
    }
  }
}

/** STEPS:
 * nums = [2,7,11,15];
    i = 0  value = 2
      j = 1 value = 7    ==> 7 === 22 - 2 false
      j = 2 value = 11   ==> 11 === 22 - 2 false
      j = 3 value = 15   ==> 15 === 22 - 2 false

    i = 1  value = 7
      j = 2 value = 11    ==> 11 === 22 - 7 false
      j = 3 value = 15    ==> 15 === 22 - 7 true
 * 
 */

// console.log(TwoSum([2, 7, 11, 15], 22));


//Method 2 --> Optimize solution
const TwoSum2 = (nums, target) => {
  const obj = {};
  for (const [index, num] of nums.entries()) {
    if (obj[num] !== undefined) return [obj[num], index]
    obj[target - num] = index;
  }
}

console.log(TwoSum2([2, 7, 11, 15], 18));


