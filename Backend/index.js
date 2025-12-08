import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'; // ✅ automatically loads .env
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import Stripe from "stripe";
import path from "path";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/upload",express.static(path.join(process.cwd(),"upload")));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
