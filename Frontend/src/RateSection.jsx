import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RateSection.module.css";

export default function RateSection() {
  const navigate = useNavigate();

  return (
    <div className={styles.rateSection}>
      <div className={styles.container}>
        <h3 className={styles.heading}>🌟 Rate an Item</h3>
        <p className={styles.text}>
          Share your thoughts and rate your favorite items!
        </p>

        {/* ⭐ Static stars (for visual look) */}
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <i key={star} className={`bi bi-star-fill ${styles.starIcon}`}></i>
          ))}
        </div>

        {/* 🚀 Button to navigate to rating page */}
        <button
          className={styles.rateButton}
          onClick={() => navigate("/rating")}
        >
          Rate Now
        </button>
      </div>
    </div>
  );
}
