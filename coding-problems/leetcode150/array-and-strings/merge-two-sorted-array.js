//https://leetcode.com/problems/merge-sorted-array/description/

//*** Most Efficient way */
//Using two pointer
function mergeSortedArray(nums1, m, nums2, n) {
  let firstPointer = m - 1;
  let secondPointer = n - 1;
  let i = m + n - 1;

  while (secondPointer >= 0) { //main logic: loop should only continue till second Pointer becomes 0
    let firstPVal = nums1[firstPointer];
    let secondPVal = nums2[secondPointer];
    if (firstPVal > secondPVal) {
      nums1[i] = firstPVal;
      i--;
      firstPointer--;
    } else {
      nums1[i] = secondPVal;
      i--;
      secondPointer--;
    }
  }
  return nums1;
}


//Using array in-built methods splice and sort
function mergeSortedArray1(nums1, m, nums2, n) {
  let len = m + n;
  nums1.splice(len - n);
  for (let index = 0; index < n; index++) {
    const nums2Item = nums2[index];
    nums1.push(nums2Item);
  }

  return nums1.sort((a, b) => a - b);
}

//Using array in-built methods concat and sort
function mergeSortedArray2(nums1, m, nums2, n) {
  nums1 = nums1.filter((el) => el);
  for (let i = 0; i < n; i++) {
    const num = nums2[i];
    nums1.push(num);
  }
  return nums1.sort((a, b) => a - b);
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 4, 5];
let nums1Length = 3;
let nums2Length = 3;

// const result = mergeSortedArray1(nums1, nums1Length, nums2, nums2Length);
// console.log("1: ", result);

// const result2 = mergeSortedArray2(nums1, nums1Length, nums2, nums2Length);
// console.log("1: ", result2);

const result = mergeSortedArray(nums1, nums1Length, nums2, nums2Length);
console.log("1: ", result);