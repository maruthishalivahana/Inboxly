import express from 'express';
import {authMiddleware}  from '../middlewares/authMiddleware.js';
import { login,register,finduser,logout,Edituser, Deleteuser, Changepassword} from '../controllers/authController.js'

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);

router.get("/me", authMiddleware, finduser);
router.put("/edit", authMiddleware, Edituser);
router.delete("/delete", authMiddleware, Deleteuser);
router.put("/change-password", authMiddleware, Changepassword);

export default router;