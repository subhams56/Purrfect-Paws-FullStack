import express from "express";
import {
  makeAdoptionRequest,
  deleteAdoptionRequest,
  updateAdoptionRequest,
  getAllAdoptionRequests,
  getAdoptionsByInterestedUser,
  getAdoptionsByCatId
} from "../controllers/Adoption-controllers.js";

const adoptionRouter = express.Router();

// Create an adoption request
adoptionRouter.post("/createAdoption", makeAdoptionRequest);



// Delete an adoption request by ID
adoptionRouter.delete("/deleteAdoption/:id", deleteAdoptionRequest);

// Update an adoption request by ID
adoptionRouter.put("/updateAdoption/:id", updateAdoptionRequest);

// Get all adoption requests
adoptionRouter.get("/", getAllAdoptionRequests);

adoptionRouter.get("/getAdoptionsByInterestedUser/:userId", getAdoptionsByInterestedUser);
adoptionRouter.get("/getAdoptionsByCatId/:catId", getAdoptionsByCatId);

export default adoptionRouter;
