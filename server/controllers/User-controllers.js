import express from "express";
import User from "../models/User-model.js";
import mongoose from "mongoose";
import { errorHandler } from "../errorHandler.js";


export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      return res.status(404).json({ msg: "No users found" });
    }

    const userData = allUsers.map((user) => {
      const { password, ...data } = user._doc;
      return data;
    });

    return res.status(200).json({ msg: "All Users", userData });
  } catch (err) {
    errorHandler(err, 500, res);
  }
};

export const getUserById = async (req,res)=>{
    try{
        const userID = req.params.id;
        const userFind = await User.findById(userID)
        .populate({
          path: 'interestedCats',
          model: 'Cat'
        })
        .populate({
          path: 'catsOwned',
          model: 'Cat'
        });
        if(!userFind){
            return res.status(404).json({msg:"User not found"});
        }

        const {password, ...userData}=userFind._doc;
        res.status(200).json({msg:`User found ${userData.username}`,userData});

    }catch(err){
        errorHandler(err,"something went wrong",500);
    }
};

export const updateUserById = async (req, res) => {
  try {
    const userID = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(userID, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    const { password, ...userData } = updatedUser._doc;
    res.status(200).json({ msg: `User updated ${userData.username}`, userData });
  } catch (err) {
    errorHandler(err, 500, res);
  }
};


export const deleteUserById = async (req, res) => {
  try {
    const userID = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userID);

    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    const { password, ...userData } = deletedUser._doc;
    return res.status(200).json({ msg: `User deleted ${userData.username}`, userData });
  } catch (err) {
    errorHandler(err, 500, res);
  }
};