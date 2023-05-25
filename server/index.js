import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from 'dotenv';
import authRouter from "./routes/Auth-routes.js";
import { userRouter } from "./routes/User-routes.js";
import { catRouter } from "./routes/Cat-routes.js";


dotenv.config()


const app = express();





 //middlewares
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cors());

 //routes
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/cats",  catRouter);


// mongodb connection 
mongoose.connect(process.env.MONGO_URI ).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello Backend node");
});
app.listen(process.env.PORT||5000,()=>console.log("Server is running"));
