import express from "express";
import {register,login,finduser,logout,Edituser,Deleteuser,Changepassword }from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (need auth)
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, finduser);
router.put("/edit", authMiddleware, Edituser);
router.delete("/delete", authMiddleware, Deleteuser);
router.put("/change-password", authMiddleware, Changepassword);

export default router;
