import express from "express";
import {connection} from './postgres-connection/postgres.js';
import router from './view/routes.js';

const PORT = 8080; 

const app = express () ;

// app.use((req,res, next)=>{express.json()
//     next();
// });
app.use(express.json());
app.use(router);

app.listen(PORT , () => {console.log(`server started at port: ${PORT}`)});
// to test the connection
connection() ;