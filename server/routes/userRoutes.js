import express from "express";

// controllers
import { authUser, getUserProfile } from "../controllers/userControllers.js";
// middleware
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
// Middleware - protect
router.route("/profile").get(protect, getUserProfile);

export default router;
