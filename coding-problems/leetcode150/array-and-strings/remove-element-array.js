
//This is the most concise solution to get the desired result but this is not accepted by leetcode
function removeElement(nums, val) {
  nums = nums.filter((el) => el !== val);
  return nums.length;
}

console.log(removeElement([3, 2, 2, 3], 3));


//This is accepted by leetcode
var removeElement1 = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
console.log(removeElement1([3, 2, 2, 3], 3));
