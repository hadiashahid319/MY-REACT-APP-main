import Payment from "../models/Payment.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create PaymentIntent for Stripe
export const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Store payment in DB
export const storePayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(200).json({ message: "Payment stored successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
