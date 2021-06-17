import express from "express";

// controllers
import {
  addOrderItems,
  getOrderById,
} from "../controllers/orderControllers.js";
// middleware
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
