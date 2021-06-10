import express from "express";

// controllers
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
// middleware
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
// Middleware - protect
router.route("/profile").get(protect, getUserProfile);

export default router;
