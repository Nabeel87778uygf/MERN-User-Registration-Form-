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

        // Check if admin already exists by email
        const admin = await User.findOne({
            where: {
                email: process.env.ADMIN_EMAIL,
            },
        });

        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD.trim(),
            10
        );

        if (admin) {
            admin.password = hashedPassword;
            admin.role = "admin";
            admin.fullName = process.env.ADMIN_NAME.trim();
            await admin.save();
            console.log(" Default admin account updated successfully.");
            return;
        }

        await User.create({
            fullName: process.env.ADMIN_NAME.trim(),
            email: process.env.ADMIN_EMAIL.trim(),
            password: hashedPassword,
            role: "admin",
        });

        console.log(" Default admin account created successfully.");
    } catch (error) {
        console.error(" Admin Seeder Error:", error.message);
    }
};