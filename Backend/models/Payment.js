import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  itemName: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  paymentId: { type: String },
  status: { type: String, default: "pending" },
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
