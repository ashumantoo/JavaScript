let objA = {
  id: 1,
  name: "Ashutosh",
  salary: 25000,
  email: "ashu@gmail.com"
}
let objB = {
  name: "Sanjeev",
  salary: 10000
}
//expected output = {id:1,name:"Ashutosh,Sanjeev",salary:10,000}
function mergeTwoObject(obj1, obj2) {
  const result = { ...obj1 };
  for (key in obj2) {
    if (result.hasOwnProperty(key)) {
      result[key] = `${result[key]},${obj2[key]}`
    } else {
      result[key] = obj2[key];
    }
  }
  console.log("Result: ", result);
}
mergeTwoObject(objA, objB);

//Mergin two object using spread operator, will override the matching key with the later object value
console.log("11111-----", { ...objA, ...objB });
