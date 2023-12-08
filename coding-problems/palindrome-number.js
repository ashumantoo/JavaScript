const isPelindrome = (x) => {
  if (x <= 0) {
    return false;
  }
  let reversedNumber = "";
  const XAsString = x.toString();
  for (let index = XAsString.length - 1; index >= 0; index--) {
    const singleDigit = XAsString[index];
    reversedNumber = `${reversedNumber}${singleDigit}`;
  }
  if (parseInt(reversedNumber) === x) {
    return true
  } else {
    return false;
  }
}

//2nd approach
const isPelindrome2 = (x) => {
  let reverse = 0; //1 12 121
  let copy = x; // 12 1
  while (copy > 0) {
    let digit = copy % 10; // 1 2 1
    reverse = reverse * 10 + digit; // 1 12 121
    copy = ~~(copy / 10); // 12 1 
  }
  return reverse = x;
}

// console.log(isPelindrome(21))
console.log(isPelindrome2(121))