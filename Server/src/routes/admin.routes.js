import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";
import { adminDashboard } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/dashboard", protect, isAdmin, adminDashboard);

export default router;