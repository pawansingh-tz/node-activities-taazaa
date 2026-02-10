import express,{application} from 'express' ;

const PORT = 8080 ;

const app:application = express();

app.use(express.json());

app.listen(PORT , () =>{console.log(`server started at port: ${PORT}`)});
