import jwt from "jsonwebtoken";
import User from "../models/User-model.js";


export const protect = async (req, res, next) => {
    let token;
     token = req.cookies.token; 
     if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            next();


        }catch(err){
            return res.status(401).json({msg:"Not Authorized , Invalid Token"});
        }

     }else{
            return res.status(401).json({msg:"You are not authorized to access this route"});
     }
}
