import express from "express";

// controllers
import { authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", authUser);

export default router;
