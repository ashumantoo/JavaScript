/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * 
 * https://www.youtube.com/watch?v=dIzcHKy5FkI&ab_channel=GregHogg
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

//Method 1 : Brut Froce - not accepted by leetcode
function removeDuplicates(nums) {
  let currentNum = nums[0];
  let uniqueArray = [nums[0]];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (currentNum !== num) {
      currentNum = num;
      uniqueArray.push(num);
      count++
    }
  }
  return { count, uniqueArray };
}

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log("Result-----", removeDuplicates(input));


//Method 2 : Brut Froce
function removeDuplicates2(nums) {
  let n = nums.length;
  let j = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  console.log(nums);
  return j;
}

const input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Result2-----", removeDuplicates2(input2));
