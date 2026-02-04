import express from "express";

const PORT = 3000 ;
const app = express() ;

// app.use((req,res,next)=>{express.urlencoded({extended:true})
//    next() ;
// });


//custom middleware
app.use((req,res,next)=> {
     console.log("first middleware");
     next() ;
});

app.use((req,res,next) => {
    console.log("second middleware");
    next();
});

app.get("/" , (req,res)=>{
    res.send("hello world");
});

app.get("/home",(req,res)=>{
    console.log("from homepage");
    res.send("from homepage");
    
});


app.listen(PORT , () => {console.log(`server started at port: ${PORT}`)});
