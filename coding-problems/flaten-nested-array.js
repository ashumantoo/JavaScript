const flaten = (arr) => {
  let flatenArray = [];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (Array.isArray(ele)) {
      const innerFlaten = flaten(ele);
      flatenArray.push(...innerFlaten);
    } else {
      flatenArray.push(ele);
    }
  }
  return flatenArray;
}

console.log(flaten([1, 2, 3, [4, 5, 6, [7, 8, 9]], 10]));