import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    cats: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cat'
    }]
  });
  
  const User = mongoose.model('User', userSchema);
  
  export default User;