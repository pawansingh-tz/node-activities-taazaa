import { Router } from "express";
import { createUser, getUsersWithMobilesJoin } from "../controller/usercontroller.js";
import { saveMobileNumber, getUsersWithMobiles } from "../controller/mobilecontroller.js";
const router = Router();
router.post("/users", createUser);
router.post("/mobile", saveMobileNumber);
router.get("/users/mobiles", getUsersWithMobiles);
router.get("/users/mobiles/join", getUsersWithMobilesJoin);
export default router;
