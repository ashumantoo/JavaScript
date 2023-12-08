
const logestCommonPrefix = (strs) => {
  let prefix = ""
  if (!strs.length) {
    return prefix;
  }
  //Take the first element from array first
  //And then itrate over the remaing array of the element by comparing each and every char inside the array
  if (strs.length) {
    let firstElement = strs[0];  //"flower"
    for (let i = 0; i < firstElement.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (firstElement[i] !== strs[j][i]) return prefix;
      }
      prefix += firstElement[i];
    }
    return prefix;
  }
}

console.log(logestCommonPrefix(["flower", "flow", "flight"]));