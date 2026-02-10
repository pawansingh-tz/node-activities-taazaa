import { Router } from "express";
import { createUser , getUsersWithMobilesJoin ,createUserWithMobiles ,getUsersWithMob} from "../controller/usercontroller.js";
import {saveMobileNumber,getUsersWithMobiles} from "../controller/mobilecontroller.js";

const router = Router();

router.post("/users", createUser);


router.post("/mobile", saveMobileNumber);
router.get("/users/mobiles", getUsersWithMobiles);

router.get("/users/mobiles/join", getUsersWithMobilesJoin);

router.post("/", createUserWithMobiles);


router.get("/userRepo" , getUsersWithMob);

export default router;
