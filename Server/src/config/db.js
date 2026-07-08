import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
    }
);


const connectDB = async () => {
    try {

        await sequelize.authenticate();

        console.log("✅ MySQL Connected Successfully");


        // Create / Update Tables
        await sequelize.sync({ alter: true });

        console.log("✅ Database Synced Successfully");


    } catch (error) {

        console.error("❌ Database Connection Failed");
        console.error(error.message);

        process.exit(1);
    }
};


export { sequelize };
export default connectDB;