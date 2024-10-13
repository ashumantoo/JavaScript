const fs = require('fs');

// Microtasks - nextTick
process.nextTick(() => console.log('nextTick 1'));

// Microtasks - Promise
Promise.resolve().then(() => console.log('promise 1'));

// Timer
setTimeout(() => {
    console.log('timer 1');

    // Microtasks inside timer
    process.nextTick(() => console.log('nextTick 2 in timer 1'));
    Promise.resolve().then(() => console.log('promise 2 in timer 1'));
}, 0);

// I/O Callback
fs.readFile(__filename, () => {
    console.log('I/O callback');

    // Microtasks inside I/O callback
    process.nextTick(() => console.log('nextTick in I/O callback'));
    Promise.resolve().then(() => console.log('promise in I/O callback'));
});

// Check Callback
setImmediate(() => {
    console.log('immediate 1');

    // Microtasks inside check callback
    process.nextTick(() => console.log('nextTick in immediate'));
    Promise.resolve().then(() => console.log('promise in immediate'));
});

// Close Callback
const closeHandle = setInterval(() => {}, 1000);
closeHandle.close = () => {
    console.log('close callback');

    // Microtasks inside close callback
    process.nextTick(() => console.log('nextTick in close callback'));
    Promise.resolve().then(() => console.log('promise in close callback'));
};
setTimeout(() => closeHandle.close(), 10);

// Microtasks - nextTick
process.nextTick(() => console.log('nextTick 3'));

// Microtasks - Promise
Promise.resolve().then(() => console.log('promise 3'));
