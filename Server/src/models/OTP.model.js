import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Otp = sequelize.define(
    "Otp",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiresAt: {
            type: DataTypes.DATE,
            allowNull: false,

        },
    },
    {
        tableName: "otps",
        timestamps: true,
        freezeTableName: true,
    }
);

export default Otp;