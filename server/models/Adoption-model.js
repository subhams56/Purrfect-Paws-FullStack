import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  cat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cat",
    required: true
  },
  interestedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;
