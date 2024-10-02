/**
 * YOUTUBE VIDE LINK : https://www.youtube.com/watch?v=69uihgVd1w0&t=6s
 * PROBLEM STATEMENT : Find the longest consecutive substring in a string "10111110010" and the count of the occurance
 * 
 * SOLUTION : Compare the current element with the previouse element if they are matching then
 *              1. increase the currentLengthCount and currentSubString value.
 *            If not matching then
 *              2. reset the currentLengthcount, currentSubString value and assing the currentLengthCount, currentSbuString
 *                 value to the maxLength and maxSubString  
 */

function findLongestConsecutiveSubstring(str) {
  let maxLength = 0;
  let currentLength = 1;

  let maxSubstring = "";
  let currentSubstring = str[0];

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === str[i - 1]) {
      currentLength++;
      currentSubstring += str[i];
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxSubstring = currentSubstring;
      }
      currentLength = 1;
      currentSubstring = str[i];
    }
  }
  return { maxSubstring, maxLength };
}

//Find the longest consecutive 1's in the string and count also
function findLongestConsecutive1sInString(str) {
  let maxLength = 0;
  let currentLength = 1;

  let maxSubstring = "";
  let currentSubstring = str[0];

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === '1' && str[i] === str[i - 1]) {
      currentLength++;
      currentSubstring += str[i];
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxSubstring = currentSubstring;
      }
      currentLength = 1;
      currentSubstring = str[i];
    }
  }
  return { maxSubstring, maxLength };
}

const str = "10100100000000111111101010";
console.log(findLongestConsecutiveSubstring(str));
console.log(findLongestConsecutive1sInString(str));