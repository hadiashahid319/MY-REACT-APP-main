import React, { useState, useEffect } from "react";
import styles from "./AdminDelete.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getItems, deleteItem } from "./services/api.js";

export default function AdminDelete() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch items from DB on mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

const handleDelete = async (item) => {
  if (!window.confirm(`Are you sure you want to delete "${item.name}"?`)) return;

  try {
    const res = await deleteItem(item._id); // send item ID
    console.log(res.message); // "Item deleted successfully"
    setItems(items.filter((i) => i._id !== item._id)); // remove from UI
  } catch (err) {
    const message = err?.message || "Failed to delete item";
    console.error("Error deleting item:", message);
    alert(message);
  }
};


  if (loading) return <p>Loading items...</p>;

  return (
    <div className={styles.adminpage}>
      <div className={styles.adminCard}>
        <h4 className="mb-4">
          <i className="bi bi-trash3 text-danger me-2"></i> Delete Items
        </h4>

        {items.length === 0 ? (
          <p className="text-muted">No items available to delete.</p>
        ) : (
          <table className="table table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, index) => (
                <tr key={it._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={it.image} alt={it.name} width="50" height="50" />
                  </td>
                  <td>{it.name}</td>
                  <td>{it.category}</td>
                  <td>{it.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(it)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <i className="bi bi-trash3-fill"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
