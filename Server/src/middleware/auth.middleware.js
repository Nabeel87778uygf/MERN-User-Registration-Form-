import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const protect = async (req, res, next) => {
    try {

        let token;

        // Check Authorization Header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }


        // Token Not Found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized. Token missing",
            });
        }


        // Verify Token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Find User
        const user = await User.findByPk(decoded.id);


        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }


        // Attach User to Request
        req.user = user;


        next();


    } catch (error) {

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });
        }


        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token Expired",
            });
        }


        console.error(error);


        res.status(500).json({
            success: false,
            message: "Authentication Failed",
        });
    }
};