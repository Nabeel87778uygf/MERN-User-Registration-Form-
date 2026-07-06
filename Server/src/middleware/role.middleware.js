import User from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. Please log in.",
            });
        }

        if (req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Admin role required.",
            });
        }

        next();
    } catch (error) {
        console.error("Role verification error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error in role verification",
        });
    }
};