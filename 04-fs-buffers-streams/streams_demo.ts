// Practice streams & buffers here
import fs from "fs"


const myBuf = Buffer.from("pratham")
console.log("raw buffer", myBuf);
console.log("buffer to text", myBuf.toString("utf-8"));

const readStream = fs.createReadStream("deepak.txt",{
    encoding: "utf-8",
    highWaterMark: 20,
})

readStream.on("data", (chunk) =>{
    console.log("chunk",chunk);
    
});


readStream.on("end", () =>{
    console.log("poori file stream ho gayi");
    
})



