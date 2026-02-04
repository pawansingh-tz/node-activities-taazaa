import express from 'express';
import { getAllUser,addUser , updateUser , getUser , deleteUser ,getAllUserAttributes,getAllUserOperator} from '../controller/userController.js';
const router = express.Router() ;

router.get("/user", getAllUser);

router.post("/user" , addUser);

router.put("/user/:userId" , updateUser);

router.get("/user/:userId" , getUser);

router.delete("/user/:userId" , deleteUser);

// to get only the restricted columns of the table 
router.get("/userAtt",getAllUserAttributes);


router.get("/userOp", getAllUserOperator);

export default router  ; 