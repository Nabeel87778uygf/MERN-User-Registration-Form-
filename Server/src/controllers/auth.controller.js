import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import { Op } from "sequelize";
import Otp from "../models/OTP.model.js";

//Register
export const register = async (req, res) => {
    try {

        const { fullName, email, password, confirmPassword } = req.body;
        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check Password Match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // Check Existing User
        const existingUser = await User.findOne({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create New User
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            role: "user" //default
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user: {
                id: newUser.id,
                fullName: newUser.fullName,
                email: newUser.email,
                role: newUser.role,
            },
        });

    } catch (error) {
        console.error("REGISTER ERROR :", error.message);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Login User
export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Check Required Fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        // Find User
        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password",
            });
        }

        // Compare Password
        const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password",
            });
        }

        const token = generateToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,
            },
        });



    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};



// Get Current Logged In User
export const getMe = async (req, res) => {

    try {

        res.status(200).json({
            success: true,
            user: {
                id: req.user.id,
                fullName: req.user.fullName,
                email: req.user.email,
                role: req.user.role,
            },
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Logout API
export const logout = async (req, res) => {
    try {

        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        res.status(200).json({
            success: true,
            message: "Logout Successful",
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// 1. SEND OTP API
export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;


        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(200).json({ success: true, message: "If the email is valid, an OTP has been sent." });
        }

        // 6-digit random code generate karein
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();


        await Otp.destroy({ where: { email } });

        const expiryTime = new Date(Date.now() + 5 * 60 * 1000);


        await Otp.create({
            email,
            otp: otpCode,
            expiresAt: expiryTime
        });


        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Password Reset OTP Code",
            html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Password Reset Request</h2>
                    <p>Your 6-digit verification code is:</p>
                    <h1 style="color: #4f46e5; letter-spacing: 5px;">${otpCode}</h1>
                    <p>This OTP is valid for <b>5 minutes</b> only. Do not share it with anyone.</p>
                   </div>`
        });

        return res.status(200).json({ success: true, message: "OTP sent successfully!" });
    } catch (error) {
        console.error("Send OTP Error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


// VERIFY OTP & RESET PASSWORD API
export const verifyOtpAndResetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        // Step 1: Sirf Email aur OTP se record find karein (No date check in query)
        const otpRecord = await Otp.findOne({
            where: {
                email: email.trim(),
                otp: otp.toString().trim()
            }
        });

        // Agar record hi nahi mila toh seedha return
        if (!otpRecord) {
            return res.status(400).json({ success: false, message: "Invalid OTP code." });
        }

        // Step 2: Dono times ko safe JavaScript Date objects mein convert karke compare karein
        const currentTime = new Date().getTime();
        const expiryTime = new Date(otpRecord.expiresAt).getTime();

        // Agar current time expiry se aage nikal gaya hai
        if (currentTime > expiryTime) {
            await Otp.destroy({ where: { email } }); // Expired OTP clean karein
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        // Step 3: Password hash karein aur update karein
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await User.update({ password: hashedPassword }, { where: { email } });

        // Step 4: OTP record delete kar dein successfully use hone ke baad
        await Otp.destroy({ where: { email } });

        return res.status(200).json({ success: true, message: "Password updated successfully!" });

    } catch (error) {
        console.error("Reset Password Error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};