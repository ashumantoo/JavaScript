/*********************************************************************************************************************
 *                                              BUFFER
 * LINK : https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js
 * 
 * --> A buffer is a space in memory (typically RAM) that stores binary data (0s and 1s).
 * --> Buffer stores bytes (1 bytes = 8 bit = 8 0s and 1s)
 * --> Buffer stores data(bytes) squentially like array, with indexing starting from 0.
 * --> Binary data in Buffer can be stored in diffent format like ASCII or UTF-8 etc
 * --> By Defualt NodeJS uses the UTF-8 format.
 * --> In NodeJS we can access those memory with Built-in Buffer class.
 * --> Buffer stores a sequence of integers.
 * --> We can not changes the size of the buffer once it is created.
 * 
 * --> Use case 
 *     1) When we read from a file with fs.readFile() like files, pdfs,images etc, the data returned to the callback or Promise is a buffer object.
 *     2) When HTTP requests are made in Node.js, they return data streams that are temporarily stored in an internal 
 *        buffer when the client cannot process the stream all at once.
 *     3) Performance Optimization : When dealing with large chunks of data or performance-intensive applications, using buffers can prevent the overhead of 
 *        converting between binary data and string data, which can be resource-intensive.
 * 
 * --> Buffers are useful when you’re interacting with binary data usually at lower networking levels.
 */

import { Buffer } from "safe-buffer";

/*******************************************************************************************************************
 * Create Buffer 
 * --> using Buffer.from() - 
 *   - Creates a new Buffer instance from an array, another Buffer, or a string
 *   - Useful for creating a Buffer from a string when reading text from files or 
 *     receiving JSON payloads from a web request
 *--> using Buffer.alloc() -
     - Allocates a new Buffer of a specified size, filled with zeroes.
 */
const bufFromString = Buffer.from('Hello World');
console.log(bufFromString); // Outputs: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

//memory spaces are filled with 00s
const newBuffer = Buffer.alloc(10);
console.log(newBuffer) // <Buffer 00 00 00 00 00 00 00 00 00 00>

//Filled with 0s and 1s
const newBufferWith1s = Buffer.alloc(10, 1);
console.log(newBufferWith1s); //<Buffer 01 01 01 01 01 01 01 01 01 01>

const asciiBuf = Buffer.alloc(5, 'aapple', 'ascii');
console.log("ASCIIbUFF----", asciiBuf);

//Reading data from Buffer using their index
console.log(asciiBuf[0]); //97 = ascii = a
console.log(asciiBuf[3]); //112 = ascii = l
console.log(asciiBuf[4]); //108 = ascii = e

//Reading all the data stored in the buffer
//The toString() method converts the bytes of the buffer into a string and returns it to the user
console.log(asciiBuf.toString());
//The toJSON() method Regardless of whether the buffer was made from a string or not, 
//it always returns the data as the integer representation of the byte.
console.log(asciiBuf.toJSON());

/*******************************************************************************
 * Modifying a Buffer
 * 
 */
const greetBuffer = Buffer.from('Hi!');
console.log("1:", greetBuffer.toString());

//Modifying buffer like this will not work since buffer only stores 0s and 1s we need to pass the
//equivalent binary value of e
// greetBuffer[1] = "e";
greetBuffer[1] = 101;
greetBuffer[2] = 121;
console.log("2:", greetBuffer.toString());


//If we wanted to change the contents of the entire buffer, we can use the write() method. 
greetBuffer.write("Bye");
console.log("3:", greetBuffer.toString());

//if you try to write more bytes than a buffer’s size, the buffer object will only accept what bytes fit.
//Here buffer size is 3, so character which is more than 3 will be discarded.
greetBuffer.write('Hello');
console.log("4:", greetBuffer.toString());//Hel

