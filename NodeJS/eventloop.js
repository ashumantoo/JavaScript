/**
 * -----------------Event Loop-------------------
 * - Event Loop is the core concept of NodeJS which allow nodejs to perform non-blocking I/O operations. 
 *   despite the fact that JavaScript is single-threaded. by offloading operations to the system kernel 
 *   whenever possible.
 * 
 * - Sequence of phases that are executed in the event loop:
 *  1. Microtasks callbacks - (First nextTick, then Promise callbacks)
 *  2. Timer callbacks - setTimeout(), setInterval()
 *  3. Microtasks callbacks - (First nextTick, then Promise callbacks)
 *  4. I/O callbacks - (File system, network requests)
 *  5. Microtasks callbacks - (First nextTick, then Promise callbacks)
 *  6. Check callbacks - setImmediate()
 *  7. Microtasks callbacks - (First nextTick, then Promise callbacks)
 *  8. Close callbacks - (Close event handlers)
 *  9. Microtasks callbacks - (First nextTick, then Promise callbacks)
 * 
 * 
 * - Ideally event loop has mainly 4 phases
 * 1. Timers Callbacks
 * 2. I/O Callbacks
 * 3. Check Callbacks
 * 4. Close Callbacks
 * 
 * -------------------------NodeJS Runtime has following components-------------------------
 * 1. Call Stack - It is a stack data structure that stores the function calls in LIFO order.
 * 2. Callback Queue - It is a queue data structure that stores the callback functions.
 * 3. Nodejs APIs - It is a set of APIs that are provided by NodeJS to perform I/O operations.
 * 4. Event Loop - It is a loop that checks the call stack and the callback queue.
 */

// Example 1
const fs = require('fs');
new Promise((resolve, reject) => { resolve() }).then(() => console.log('promise 1'));
setTimeout(() => console.log('setTimeout 1'), 0);
setTimeout(() => console.log('setTimeout 2'), 0);
process.nextTick(() => console.log('nextTick 1'));
setImmediate(() => console.log('setImmediate 1'));
fs.readFile(__filename, () => {
    console.log('I/O callback');

    // Microtasks inside I/O callback
    Promise.resolve().then(() => console.log('promise in I/O callback'));
    process.nextTick(() => console.log('nextTick in I/O callback'));
});



// const fs = require('fs');

// // Microtasks - nextTick
// process.nextTick(() => console.log('nextTick 1'));

// // Microtasks - Promise
// Promise.resolve().then(() => console.log('promise 1'));

// // Timer
// setTimeout(() => {
//     console.log('timer 1');

//     // Microtasks inside timer
//     process.nextTick(() => console.log('nextTick 2 in timer 1'));
//     Promise.resolve().then(() => console.log('promise 2 in timer 1'));
// }, 0);

// // I/O Callback
// fs.readFile(__filename, () => {
//     console.log('I/O callback');

//     // Microtasks inside I/O callback
//     process.nextTick(() => console.log('nextTick in I/O callback'));
//     Promise.resolve().then(() => console.log('promise in I/O callback'));
// });

// // Check Callback
// setImmediate(() => {
//     console.log('immediate 1');

//     // Microtasks inside check callback
//     process.nextTick(() => console.log('nextTick in immediate'));
//     Promise.resolve().then(() => console.log('promise in immediate'));
// });

// // Close Callback
// const closeHandle = setInterval(() => {}, 1000);
// closeHandle.close = () => {
//     console.log('close callback');

//     // Microtasks inside close callback
//     process.nextTick(() => console.log('nextTick in close callback'));
//     Promise.resolve().then(() => console.log('promise in close callback'));
// };
// setTimeout(() => closeHandle.close(), 10);

// // Microtasks - nextTick
// process.nextTick(() => console.log('nextTick 3'));

// // Microtasks - Promise
// Promise.resolve().then(() => console.log('promise 3'));
