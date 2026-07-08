import express from "express";
import {
    register,
    login,
    getMe,
    logout,
    sendOtp,
    verifyOtpAndResetPassword,
} from "../controllers/auth.controller.js";
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router();

// Auth Routes
router.post("/register", register);

router.post("/login", login);

router.get("/getme", protect, getMe);

router.post("/logout", protect, logout);

router.post("/send-otp", sendOtp);

router.post("/verify-otp-reset-password", verifyOtpAndResetPassword);

export default router;