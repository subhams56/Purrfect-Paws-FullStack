import express from "express";

import upload from "../middlewares/multer.js";
import { createCat, deleteCat, getAllCats, getCatById, updateCat } from "../controllers/Cat-controllers.js";

export const catRouter = express.Router();

//CRUD operations
catRouter.get("/", getAllCats);
catRouter.get("/:id", getCatById);
catRouter.post("/createCat", upload.single("image"),  createCat);
catRouter.put("/updateCat/:id", upload.single("image"),  updateCat);
catRouter.delete("/deleteCat/:id", deleteCat);




