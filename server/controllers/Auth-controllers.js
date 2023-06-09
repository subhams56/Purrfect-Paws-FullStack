import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User-model.js";
import { errorHandler } from "../errorHandler.js";


export const registerUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;
    const isExisting = await User.findOne({ email });
    if (isExisting) {
      return res.status(400).json({ msg: `User already exists with the email ${email}, try to log in` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword, phoneNumber });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "5h" });

    const { password: userPassword, ...user } = newUser._doc;

    res.status(200).json({ msg: "User registered successfully", user, token }); // Sending a success response
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" }); // Sending an error response
  }
};

  


export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "5h" });
      const { password: userPassword, ...userData } = user._doc;
  
      
  
  
      res.status(200).json({ msg: `User ${userData.username} logged in`, userData ,token });
  
    } catch (err) {
      errorHandler(err, "Something went wrong", 500);
    }
  };


