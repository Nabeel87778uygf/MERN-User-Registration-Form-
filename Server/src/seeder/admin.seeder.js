import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const createAdmin = async () => {
    try {

        if (
            !process.env.ADMIN_NAME ||
            !process.env.ADMIN_EMAIL ||
            !process.env.ADMIN_PASSWORD
        ) {
            throw new Error("Admin credentials are missing in .env");
        }

        // Check if admin already exists
        const admin = await User.findOne({
            where: {
                role: "admin",
            },
        });

        if (admin) {
            console.log(" Default admin already exists.");
            return;
        }


        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            10
        );


        await User.create({
            fullName: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: "admin",
        });

        console.log(" Default admin account created successfully.");
    } catch (error) {
        console.error(" Admin Seeder Error:", error.message);
    }
};