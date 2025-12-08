import React, { useState, useEffect } from "react";
import styles from "./AdminUpdate.module.css";
import { getItems, updateItem, deleteItem } from "./services/api.js";

export default function AdminUpdate() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", description: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch items from DB
  const fetchItems = async () => {
    setLoading(true);
    try {
      const data = await getItems(); // data is already an array
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch failed", err);
      setItems([]);
      setMessage("Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Select an item for updating
  const handleSelect = (item) => {
    setSelectedItem(item);
    setFormData({ name: item.name, price: item.price, description: item.description });
    setMessage("");
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update item in DB
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedItem) return;

    try {
      await updateItem(selectedItem._id, formData);
      setMessage("Item updated successfully");
      setSelectedItem(null);
      setFormData({ name: "", price: "", description: "" });
      fetchItems(); // refresh items
    } catch (err) {
      console.error(err);
      setMessage("Update failed");
    }
  };

  // Delete item from DB
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await deleteItem(id);
      setMessage("Item deleted successfully");
      fetchItems(); // refresh items
    } catch (err) {
      console.error(err);
      setMessage("Delete failed");
    }
  };

  return (
    <div className={styles.adminpage}>

  {/* 🔹 PAGE TITLE */}
  <h2 className="text-center mb-3 fw-bold">Update / Delete Items</h2>

  {/* 🔹 SUCCESS / ERROR MESSAGE ON TOP */}
  {message && (
    <p className="text-center alert alert-info">{message}</p>
  )}

  <div className={styles.updateBox}>

    {/* 🔹 ITEMS LIST */}
    {loading ? (
      <p className="text-center">Loading items...</p>
    ) : items.length === 0 ? (
      <p className="text-center">No items found</p>
    ) : (
      <div className="mt-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="mb-3 p-3 shadow-sm rounded bg-white d-flex justify-content-between align-items-center"
          >
            <span className="fw-semibold">
              {item.name} - <span className="text-success">Rs {item.price}</span>
            </span>

            <div className="d-flex gap-2">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleSelect(item)}
              >
                Update
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* 🔹 UPDATE FORM (Always below, not side-by-side) */}
    {selectedItem && (
      <form
        onSubmit={handleUpdate}
        className="mt-4 p-4 shadow rounded bg-white"
      >
        <h4 className="mb-3">Edit Item</h4>

        <input
          className="form-control mb-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <input
          type="number"
          className="form-control mb-2"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <textarea
          className="form-control mb-3"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button className="btn btn-success w-100" type="submit">
          Save Changes
        </button>
      </form>
    )}
  </div>
</div>

  )
}
