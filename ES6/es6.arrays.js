////////////////////////////////////////////
// Arrays in ES6

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(element => {
    element.style.backgroundColor = 'dodgerblue';
});


//Loops
//ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        // continue;
        break;
    }

    boxesArr5[i].textContent = 'I changes to blue!';
}
*/

//ES6
for (const cur of boxesArr6) {
    if (cur.className === 'box blue') {
        continue;
    }
    cur.textContent = 'I changeed to blue?';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (element) {
    return element >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
let resutl = ages.findIndex(element => element >= 18);
console.log(resutl);

let result2 = ages.find(element => element >= 18);
console.log(result2);


