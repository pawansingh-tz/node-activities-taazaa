const math = require("./math");

// fs = file system 
const fs = require("fs");


// creating a file and saving "hello world"
fs.writeFileSync("./test.txt" ,"hello world");

// reading a file synchronously / blocking  
const result = fs.readFileSync("./test.txt" ,"utf-8");

console.log("reading file synchronously : ",result);



console.log(math.add(2,4));

console.log(math.sub(6,2));
