import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
export const authMiddleware =( async(req, res, next) => {
    // Get token from header
  try {
      // const accesstoken = req.cookies.token?.split(" ")[1];
const accesstoke=req.cookies?.accessToken||req.headers?.authorization?.split(" ")[1];
console.log(accesstoke)
      if (!accesstoke) {
          return res.status(401).json({ message: "Unauthorized" });
      }
     
    // Verify token
      const decoded=jwt.verify(accesstoke, process.env.ACCESS_TOKEN_SECRET)
          if (!decoded) {
              return res.status(401).json({ message: "Unauthorized" });
          }
   // Find user in DB (exclude password and refreshToken)
         const user=await User.findById(decoded?._id).select(
              "-password -refreshToken")
   if (!user) {
              return res.status(401).json({ message: "envalid access token" });
          }
     // Attach user to request object
          req.user =user;
          next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ message: "Token expired or invalid" });
  }
    });

