import express, { Router } from "express";
import { getAllUser, addUser, updateUser, getUser, deleteUser } from "../controller/userController.js";
const router = express.Router();
router.get("/user", getAllUser);
router.post("/user", addUser);
router.put("/user/:userId", updateUser);
router.get("/user/:userId", getUser);
router.delete("/user/:userId", deleteUser);
export default router;
//# sourceMappingURL=routes.js.map