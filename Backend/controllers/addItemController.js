import Item from "../models/Items.js";

export const addItem = async (req, res) => {
  try {
    const newItem = new Item(req.body); // req.body should contain name, price, category, description, image
    const savedItem = await newItem.save();
    res.status(201).json({ message: "Item added successfully", item: savedItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding item", error: err.message });
  }
};

// GET all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE item
export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Item updated successfully", updatedItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE item
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};