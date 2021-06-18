import express from "express";

// controllers
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderControllers.js";
// middleware
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
