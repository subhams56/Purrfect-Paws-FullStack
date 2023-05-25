import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import moment from "moment/moment.js";
import Cat from "../models/Cat-model.js";

export const imgconfig = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}-${file.originalname}`)
    }

});

export const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Not an image! Please upload an image"));
    }
}



export const upload = multer({ 
    storage : imgconfig,
    fileFilter: isImage,



});

export default upload;

