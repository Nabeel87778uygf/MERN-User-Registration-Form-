import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import { createAdmin } from "./seeder/admin.seeder.js";

dotenv.config();

const PORT = process.env.PORT || 7000;

const startServer = async () => {
    try {
        await connectDB();
        await createAdmin();

        app.listen(PORT, () => {
            console.log(` Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();