import User from "../models/User-model.js";
import Cat from "../models/Cat-model.js";
import { errorHandler } from "../errorHandler.js";

export const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find().populate('user', 'username email'); // Populate the 'user' field with 'username' and 'email'
    res.status(200).json({ cats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCatById = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await Cat.findById(id).populate('user', 'username email'); // Populate the 'user' field with 'username' and 'email'

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json({ cat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





export const createCat = async (req, res) => {
    try {
      const { name, breed, age, gender, description , user , adoptionStatus } = req.body;
      const image = req.file.filename;
  
      const newCat = new Cat({
        name,
        breed,
        age,
        gender,
        description,
        image,
        user ,
        adoptionStatus
      });
  
      const savedCat = await newCat.save();
      res.status(201).json({ message: "Cat created successfully", cat: savedCat });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const updateCat = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, breed, age, gender, description, adoptionStatus , user } = req.body;
      const image = req.file ? req.file.filename : undefined;
  
      const updatedCat = await Cat.findByIdAndUpdate(
        id,
        {
          name,
          breed,
          age,
          gender,
          description,
          image,
          adoptionStatus,
          user
        },
        { new: true }
      );
  
      if (!updatedCat) {
        return res.status(404).json({ message: "Cat not found" });
      }
  
      res.json({ message: "Cat updated successfully", cat: updatedCat });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const deleteCat = async (req, res) => {
    try {
      const { id } = req.params;
  
      const cat = await Cat.findById(id);
      
      if (!cat) {
        return res.status(404).json({ message: "Cat not found" });
      }
      
      const deletedCat = await Cat.findByIdAndRemove(id);
  
      res.json({ message: "Cat deleted successfully", cat: deletedCat });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  