const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const PORT = 8000 ;
const app = express() ;

//middleware 
app.use(express.urlencoded({extended:false})); // whenever any urlencoded / form data come then it puts it in body
//on every request this middleware runs


//Get all the users
app.get("/users",(req,res) =>{
    return res.json(users);
});


// add new user
app.post("/users",(req,res)=>{
    const body = req.body;

    users.push({...body , id:users.length+1});
       fs.writeFile("./MOCK_DATA.json", JSON.stringify(users) , (err,data)=>{
       return res.json({status:"user added"});
    });
 });
    
//Get user by id 
app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id) ;

    const user = users.find(user => user.id ===id);
    return res.json(user);
});


//Update the user
app.put("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const body = req.body;

    //const user = users.find(user=> user.id===id);

    const userIndex = users.findIndex(user => user.id===id);
    console.log(userIndex);
    
    if(userIndex === -1 ){
        return res.status(404).json({message:"user not found"});
    }
    console.log(users[userIndex]);

    // update user 
    users[userIndex] = {
        ...users[userIndex],
        ...body
    };

    console.log(users[userIndex]);

    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users , null ,2) , (err,data)=>{
       
       if (err) {
        return res.status(500).json({ message: "Failed to update user" });
      }
        return res.json({status:"user updated"});
    });
    
});



//delete user with id 

app.delete("/deleteUser/:id" , (req,res) =>{
    const id = Number(req.params.id);

    const userIndex = users.findIndex(user => user.id ===id);

    if(userIndex === -1 ){
        return res.status(404).json({message:"User not found"});
    }

    users.splice(userIndex,1);

    fs.writeFile("/MOCK_DATA.json",
        JSON.stringify(users,null,2),
        (err,data)=>{
            if(err){
                 return res.status(500).json({message:"failed to delete"});
           }
            return res.json({status:"user deleted"});
        }
    )



});


app.listen(PORT, ()=> {
   console.log(`server started at port: ${PORT}`);
});


