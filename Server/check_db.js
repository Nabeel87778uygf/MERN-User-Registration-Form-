import dotenv from "dotenv";
import { sequelize } from "./src/config/db.js";
import User from "./src/models/user.model.js";

dotenv.config();

const run = async () => {
    try {
        await sequelize.authenticate();
        const users = await User.findAll();
        console.log("USERS IN DATABASE:");
        users.forEach(u => {
            console.log(`- ID: ${u.id}, Name: ${u.fullName}, Email: ${u.email}, Role: ${u.role}`);
        });
        process.exit(0);
    } catch (e) {
        console.error("Error:", e);
        process.exit(1);
    }
};

run();
