import Adoption from "../models/Adoption-model.js";

import User from "../models/User-model.js";

export const makeAdoptionRequest = async (req, res) => {
  try {
    const { catId, interestedUserId, ownerId } = req.body;

    const adoption = new Adoption({
      cat: catId,
      interestedUser: interestedUserId,
      owner: ownerId
    });

    const savedAdoption = await adoption.save();

    // Update interestedCats field of the user model
    await User.findByIdAndUpdate(interestedUserId, { $push: { interestedCats: catId } });

    res.status(201).json({ message: "Adoption request created successfully", adoption: savedAdoption });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getAdoptionsByInterestedUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const adoptions = await Adoption.find({ interestedUser: userId })
      .populate("cat")
      .populate("owner");

    res.json({ adoptions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAdoptionsByCatId = async (req, res) => {
  try {
    const { catId } = req.params;

    const adoptions = await Adoption.find({ cat: catId })
      .populate({
        path: "interestedUser",
        select: "-password -interestedCats -catsOwned"
      })
      .populate({
        path: "owner",
        select: "-password -interestedCats -catsOwned"
      }).populate("cat");

    res.json({ adoptions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const deleteAdoptionRequest = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the deleted adoption request
    const deletedAdoption = await Adoption.findByIdAndRemove(id);

    if (!deletedAdoption) {
      return res.status(404).json({ message: "Adoption request not found" });
    }

    // Get the interestedUserId from the deletedAdoption
    const interestedUserId = deletedAdoption.interestedUser;

    // Update the user model to remove the catId from interestedCats
    await User.findByIdAndUpdate(interestedUserId, {
      $pull: { interestedCats: deletedAdoption.cat },
    });

    res.json({ message: "Adoption request deleted successfully", adoption: deletedAdoption });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateAdoptionRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { catId, interestedUserId, ownerId } = req.body;

    const updatedAdoption = await Adoption.findByIdAndUpdate(
      id,
      {
        cat: catId,
        interestedUser: interestedUserId,
        owner: ownerId
      },
      { new: true }
    );

    if (!updatedAdoption) {
      return res.status(404).json({ message: "Adoption request not found" });
    }

    res.json({ message: "Adoption request updated successfully", adoption: updatedAdoption });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllAdoptionRequests = async (req, res) => {
  try {
    const adoptions = await Adoption.find()
      .populate({ path: "cat", select: "-_id -__v -user -owner"})
      .populate({ path: "interestedUser", select: "-password -_id -__v -interestedCats -catsOwned"  })
      .populate({ path: "owner", select: "-password -interestedCats -catsOwned -_id -cats -__v " });

    res.json({ adoptions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

