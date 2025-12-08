import express from "express";
import { createPaymentIntent, storePayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);
router.post("/payments", storePayment);
export default router;
