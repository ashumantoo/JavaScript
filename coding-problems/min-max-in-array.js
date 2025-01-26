function minMaxInArray(arr){
  return {min: Math.min(...arr),max:Math.max(...arr)}
}
console.log("Min Max in array: ",minMaxInArray([20,5,25,50,100,23,56]));


function minMaxInArray1(arr){
  let min = arr[0];
  let max = arr[0];
  for(let i=1; i<arr.length; i++){
      if(arr[i] < min){
          min = arr[i];
      }
      if(arr[i] > max){
          max = arr[i]
      }
  }
  return {min,max}
}
console.log("Min Max in array1: ",minMaxInArray1([20,5,25,50,100,23,56]));