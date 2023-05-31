import express from "express";
import { deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/User-controllers.js";
import { protect } from "../middlewares/auth-middleware.js";

export const userRouter = express.Router();

userRouter.get("/", protect,  getAllUsers);
userRouter.get("/:id",protect, getUserById);
userRouter.put("/updateUser/:id",   updateUserById);
userRouter.delete("/deleteUser/:id", deleteUserById);
