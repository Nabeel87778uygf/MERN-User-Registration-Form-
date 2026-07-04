import User from "../models/user.model.js";

export const adminDashboard = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome Admin",
            admin: {
                id: req.user.id,
                fullName: req.user.fullName,
                email: req.user.email,
                role: req.user.role,
            },
        });
    } catch (error) {
        console.error("ADMIN ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};