import express from "express";
import { submitRating } from "../controllers/ratingController.js";

const router = express.Router();

router.post("/", submitRating);

export default router;
