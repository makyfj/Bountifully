import express from "express";

// controllers
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);
router.get("/", getProducts);

export default router;
