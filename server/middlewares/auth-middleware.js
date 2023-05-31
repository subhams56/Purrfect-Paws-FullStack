import User from "../models/User-model.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    let token;
  
    // Check for the token in the request headers
    if (req.headers.authorization && req.headers.authorization.startsWith("token")) {
      // Extract the token without the "token" prefix
      token = req.headers.authorization.split(" ")[1];
    }
  
    // If token is not found in headers, check the query parameters
    if (!token) {
      token = req.query.token;
    }
  
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (err) {
        return res.status(401).json({ msg: "Not Authorized, Invalid Token" });
      }
    } else {
      return res.status(401).json({ msg: "You are not authorized to access this route" });
    }
  };
  