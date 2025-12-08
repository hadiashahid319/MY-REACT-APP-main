// backend/models/Item.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String, // must be added
});


export default mongoose.model("Item", itemSchema);
