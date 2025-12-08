import express from "express";
import { addItem, getItems, updateItem, deleteItem } from "../controllers/addItemController.js";

import multer from "multer";
import path from "path";
import Item from "../models/Items.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "upload/mirrors"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const image = req.file ? req.file.filename : null;

    const newItem = new Item({ name, description, price, category, image });
    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Item added successfully",
      item: savedItem,
       imageUrl: `http://localhost:5000/upload/mirrors/${image}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding item", error: err.message });
  }
});

router.get("/", getItems); // Read all
router.put("/:id", updateItem); // Update
router.delete("/:id", deleteItem); 

export default router;
