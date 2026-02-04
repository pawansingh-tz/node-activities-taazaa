const fs = require("fs");
const os = require("os");

console.log("start");


// this gives how many maximum thread can be allocated to complete the blocking task
// by default there are 4 threads 
console.log("length :",os.cpus().length);

// reading file asynchronously/non-blocking 
fs.readFile("./test.txt" , "utf-8" , (err, result)=>{
    if(err){console.log("error",err);}
    else{console.log(result)};
});

console.log("end");
