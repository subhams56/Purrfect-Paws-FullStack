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
  
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 18000, // 18000 milliseconds = 5 hours
      }).status(201).json({ msg: "User Created", user });
  
    } catch (err) {
      res.status(500).json({ msg: "Something went wrong" });
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
  
      // Set the token as an HTTP cookie
      res.cookie('token', token, {
        httpOnly: true,
        maxAge:18000
        // Additional cookie options if needed
      });
  
      res.status(200).json({ msg: `User ${userData.username} logged in`, userData });
  
    } catch (err) {
      errorHandler(err, "Something went wrong", 500);
    }
  };


export const logoutUser = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
        });
    res.status(200).json({ msg: "User logged out" });
    
    
}