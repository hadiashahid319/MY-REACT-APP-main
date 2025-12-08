import React, { useState, useEffect } from "react";
import styles from "./CandleGallery.module.css";

function CandlesGallery() {
  const [candles, setCandles] = useState([]);
  const [selectedCandle, setSelectedCandle] = useState(null);

  // ✅ Fetch only "candles" from admin-added items in localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("adminItems")) || [];
    const filteredCandles = stored.filter(
      (item) => item.category.toLowerCase() === "candles"
    );
    setCandles(filteredCandles);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* 🔹 Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>🕯️ Candles Gallery</h1>
        <p className={styles.subtext}>Explore our soothing candle collection</p>
      </div>

      {/* 🔹 Candles Grid */}
      <div className={styles.container}>
        {candles.length === 0 ? (
          <p className="text-muted text-center">
            No candles available yet — please check back later.
          </p>
        ) : (
          candles.map((candle) => (
            <div key={candle.id} className={styles.card}>
              <img
                src={candle.image}
                alt={candle.name}
                className={styles.image}
              />
              <div className={styles.info}>
                <h3 className={styles.title}>{candle.name}</h3>
                <p className={styles.price}>Rs {candle.price}</p>
                <button
                  className={styles.button}
                  // onClick={() => setSelectedCandle(candle)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔹 Modal (Candle Details) */}
      {/* {selectedCandle && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCandle(null)}
        > */}
          {/* <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>{selectedCandle.name}</h2> */}
            {/* <p className={styles.modalPrice}>
              💰 Price: Rs {selectedCandle.price}
            </p> */}
            {/* <img
              src={selectedCandle.image}
              alt={selectedCandle.name}
              className={styles.modalImage}
            /> */}
            {/* <p className={styles.modalDescription}>
              {selectedCandle.description}
            </p> */}
            {/* <button
              className={styles.closeButton}
              onClick={() => setSelectedCandle(null)}
            >
              Close
            </button> */}
          {/* </div> */}
        {/* </div>
      )} */}
    </div>
  );
}

export default CandlesGallery;
