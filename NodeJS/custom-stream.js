const { Readable, Writable } = require('node:stream')
const fs = require('node:fs')


const readableStreams = new Readable({
  highWaterMark: 10,
  read() { }
});

const writableStreams = new Writable({
  write(stream_chunk) {
    fs.writeFile('output.txt',stream_chunk,(err)=>{
      if (err) console.log(err)
      console.log("File save successfully.")
    })
  }
})

//creating a customer readable stream
readableStreams.on('data', (chunk) => {
  console.log("Chunk: ", chunk)
  writableStreams.write(chunk);
});



//Pushing data to the readable stream
readableStreams.push("Hi, how are your? Provides complex, rich fragrances designed to evoke emotion and transport individuals. Scents are crafted for all genders and identities, fostering connections. Natural ingredients are ecologicall")