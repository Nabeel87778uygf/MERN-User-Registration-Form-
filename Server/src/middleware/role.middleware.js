import User from "../models/user.model.js";

export const isAdmin = async (req, res) => {

    try {
        if (!req.user) {
            return res.json(401).json({
                success: false,
                message: "Unauthorized",

            })
            if (req.user.role !== "admin") {
                return res.status(403).json({
                    success: false,
                    message: "Access denied. Admin only.",
                });
            }
            next()
        }
    } catch (error) {

    }
}