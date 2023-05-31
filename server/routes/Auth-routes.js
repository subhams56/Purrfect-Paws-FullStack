import express from "express";
import {  loginUser, logoutUser, registerUser } from "../controllers/Auth-controllers.js";


const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser );
authRouter.post("/logout", logoutUser );


export default authRouter;