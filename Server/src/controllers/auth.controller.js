import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";


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




// Logout
// POST /api/auth/logout

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