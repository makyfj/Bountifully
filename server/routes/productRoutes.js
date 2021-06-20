import express from "express";

// controllers
import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productControllers.js";

// middleware
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
