//for given two string check wheather they are anagram to each other

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  str1 = str1.split("").sort().join("").toLowerCase();
  str2 = str2.split("").sort().join("").toLowerCase();

  return str1 === str2;
}

const result = checkAnagram('listen', 'silent');
console.log("Result ----", result);