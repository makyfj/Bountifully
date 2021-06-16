import express from "express";

// controllers
import { addOrderItems } from "../controllers/orderControllers.js";
// middleware
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);

export default router;
