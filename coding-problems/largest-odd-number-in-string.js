const largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if ((num[i] - '0') % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};
console.log(largestOddNumber("124567968"));