/*********************************************************************************************************************
 *                                           STREAMS IN NODEJS
 * --> Streams in nodejs is a way to handle large data efficiently while reading or writting.
 * --> Instead of reading data all at once from the memory, streams reads the data in chunks, piece by piece without loading
 * --> all the data into the memory at once.
 * --> It makes us to read/write very large data even the data larger that the computer memory(RAM)
 * --> Example of streams are - 
 *        a) Video/Audio streaming on OTT platforms, they uses streams to process the large data at client end.
 * 
 * --> Befefit of streams
 *    - Memory efficiency
 *    - Time efficiency 
 * 
 * --> There are 4 types of streams in NodeJS
 *     1) Writable Stream : streams to which we can write data. eg. fs.createWriteStream() lets us write data to a file using streams.
 *     2) Readable Stream : streams from which data can be read. eg. fs.createReadStream() lets us read the contents of a file.
 *     3) Duplex : streams that are both Readable and Writable. For example, net.Socket.
 *     4) Transform : streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, 
 *        you can write compressed data and read decompressed data to and from a file
 * 
 * --> NOTE: Buffer is the memory space which is used to store the chunk of data while data is processing between source and destination.
 */



/**************************************************** Writable Streams **********************************************
 * Example -
 * 1. File Writing: Writing data to a file using fs.createWriteStream().
 * 2. HTTP Responses: Sending responses to clients in a web server.
 * 3. Database Inserts: Streaming large amounts of data into a database.
 * 4. Console Output: Writing to process.stdout for command-line applications.
 */

import * as fs from 'node:fs';

// const writeStream = fs.createWriteStream("bigfile.txt");
// for (let i = 0; i <= 1000000; i++) {
//     writeStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
// }
// writeStream.end();



/**************************************************** Readable Streams **********************************************
 * Example -
 * 1. File Reading: Reading data from a file using fs.createReadStream().
 * 2. HTTP Requests: Receiving data from client requests in a web server.
 * 3. Database Queries: Streaming large result sets from a database.
 * 4. User Input: Reading from process.stdin for command-line interfaces.
 */

/*Reading large file without streams it is taking very very long time more than 3 mins to process all the file data
const data = fs.readFileSync('bigfile.txt','utf-8');
console.log("1:",data);
*/

//with streams it is taking 2-3 miliseconds
const readStream = fs.createReadStream("bigfile.txt");
readStream.on("data", (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on("end", () => {
    console.log(`Read stream finished`);
});

readStream.on("error", (error) => {
    console.log(error);
});


/**************************************************** Duplex Streams **********************************************
 * Example -
 * 1. TCP Sockets: Implementing network communication where data flows both ways.
 * 2. SSH Tunnels: Establishing secure, bidirectional communication channels.
 * 3. Websockets: Creating real-time, full-duplex communication in web applications.
 * 4. Inter-process Communication: Facilitating two-way communication between processes.
 */

// import * as net from '"node:net';
// const server = net.createServer((socket) => {
//     socket.write("Server: Hello!");
//     socket.on("data", (data) => {
//         console.log("Received:", data.toString());
//     });
// });
// server.listen(8080);


/**************************************************** Transform Streams **********************************************
 * Example -
 * 1. Data Compression: Compressing or decompressing data on-the-fly.
 * 2. Encryption/Decryption: Securing data as it's being transmitted.
 * 3. Data Parsing: Converting between data formats (e.g., CSV to JSON).
 * 4. Text Encoding: Changing character encodings of text data.
 */

// const { Transform } = require("node:stream");
import { Transform } from 'node:stream';
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);