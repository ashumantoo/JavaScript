// console.log("first")

// setTimeout(() => {
//     console.log("two")
// }, 1000);

// const fun1 = () => {
//     setTimeout(() => {
//         console.log("three")
//     }, 0)
// };

// fun1();

// console.log("Four")

// console.log("type +++",2 + "2");
// console.log("type +++",2 + parseInt("2"));

// console.log(a);
// // console.log(b);
// var a;
// let b;

// console.log(global);

// let a = 5;
// let b = "5"
// console.log(a + b);
// console.log(a - b);
//============================
let _a = 260;
let _b = "Hi";
let c = NaN;
let d = 0

console.log(_a || _b)   // Returns 260 since the first value is truthy 
console.log(_a || c)  // Returns 260 since the first v_alue is truthy
console.log(c || d)
console.log(_a && b)    // Returns “Hi” since both the values are truthy  
console.log(b && c)  // Returns NaN since the second value is falsy
console.log(c && d)

//====================================
//global declaration of num having global scope
var num = 150;
function func1() {
  // local variable inside function has local scope
  var num = 250;
  console.log("mynum = " + num); // answer is 250 called locally
  console.log("this.mynum = " + this.num); // answer is 150 as “this” keyword points to //global variable i.e., window object.
}
func1();

// declaring global variables 100 has global scope
var myNum = 100;
function PrintNum() {
  this.myNum = 300;
  this.display = function () {
    var myNum = 400;
    console.log("myNum = " + myNum); // 400
    console.log("this.myNum = " + this.myNum); // 300
  };
}
var printN = new PrintNum();
printN.display();

//=====================================================
let arr = [1, 2, [3, [4, 5]], 6, [7, 8, 9]] // flatten this array

//====================================================
console.log("first")

setTimeout(() => {
  console.log("two")
}, 1000);

const fun1 = () => {
  setTimeout(() => {
    console.log("three")
  }, 0)
};

const fun2 = async () => {
  setTimeout(() => {
    console.log("four")
  }, 0)
};

fun1();
fun2()
console.log("five")

//============================================
let myarray = new Array(1, 4, 3, 6, 10, 0, 22)
console.log(myarray.sort())
myarray.sort(function (a, b) { return b - a; });
console.log(myarray);

//============================================
var a = 0;
var b = 24; // variable declaration with value
if (a) { console.log(a) }   // Since the a value is 0 the code will not run ( Falsy)
if (b) { console.log(b) }

var req = [
  {name: 'A', age: 20},
  {name: 'B', age: 21},
  {name: 'C', age: 20},
  {name: 'D', age: 24},
  {name: 'E', age: 24},
  {name: 'F', age: 25},
]



let res = {
  20: [
      {name: 'A', age: 20},
      {name: 'C', age: 20}
  ],
  21: [
      {name: 'B', age: 21}
  ]
}

const responseData = {};
req.forEach((reqItem)=>{
const responseDataKey = Object.keys(responseData);
if(responseDataKey.includes(reqItem.age.toString())){ 
const dataToPush = responseData[reqItem.age];
dataToPush.push(reqItem)
}else{
responseData[reqItem.age] = [reqItem];
}
});
console.log(responseData);