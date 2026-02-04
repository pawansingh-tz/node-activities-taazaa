const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res)=> {
    console.log("New Request Received");
    res.end("hello from server");
    
});

myServer.listen(8000 , () => console.log("server started !"));


const newServer = http.createServer((req , res)=>{

    if(req.url ==="/favicon.ico") return res.end();

     const log = `${Date.now()}: ${req.url} New Request Received \n`
     //console.log(req.url);
     const myUrl = url.parse(req.url);
     console.log(myUrl);

     fs.appendFile("log.txt" , log , (err,data) => {
        switch (myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("hello , I am pawan");
                break;
            default:
                res.end("404 Not Found");           
        }
     })
});

newServer.listen(8080,()=>{ console.log("server started !")});