import React, { useState, useEffect } from "react";
import styles from "./FramesGallery.module.css";

function FramesGallery() {
  const [frames, setFrames] = useState([]);

  // 🔹 Fetch all admin items from localStorage
  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem("adminItems")) || [];

    // 🔹 Filter only frames category
    const frameItems = allItems.filter(
      (item) =>
        item.category.toLowerCase() === "frames" ||
        item.category.toLowerCase() === "frame"
    );

    setFrames(frameItems);
  }, []);

  const [cart, setCart] = useState([]);

  // 🔹 Add to cart functionality (localStorage optional)
  const handleAddToCart = (frame) => {
    const updatedCart = [...cart, frame];
    setCart(updatedCart);
    localStorage.setItem("userCart", JSON.stringify(updatedCart));
    alert(`${frame.name} added to cart ✅`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.heading}>ALL Frames Gallery</h1>
        <p className={styles.filterLabel}>Showing all Frames</p>
      </div>

      <div className={styles.container}>
        {frames.length === 0 ? (
          <p className={styles.noItems}>
            No frames available. Please ask the admin to add some items.
          </p>
        ) : (
          frames.map((frame) => (
            <div key={frame.id} className={styles.card}>
              <img
                src={frame.image}
                alt={frame.name}
                className={styles.image}
              />
              <div className={styles.info}>
                <h3 className={styles.title}>{frame.name}</h3>
                <p className={styles.price}>Rs {frame.price}</p>
                <button
                  className={styles.button}
                  onClick={() => handleAddToCart(frame)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FramesGallery;
