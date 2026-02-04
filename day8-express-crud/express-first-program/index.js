const express = require("express");
const port = 8000; 
//handler
const app = express() ;

app.get("/" , (req,res)=>{
    return res.send("Hello from homepage");
});

app.get("/about" , (req,res)=> {
    return res.send(`Hello  ${req.query.name}`);
});


app.listen(port,()=>console.log(`server started at ${port}`));
