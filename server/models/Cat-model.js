import express from "express";
import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    adoptionStatus: {
      type: String,
      enum: ['Available', 'Pending', 'Adopted'],
      default: 'Available'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  
  const Cat = mongoose.model('Cat', catSchema);
  
  export default Cat;