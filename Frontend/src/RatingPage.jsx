import React, { useState } from "react";
import { z } from "zod";
import styles from "./RatingPage.module.css";
import { submitRatingAPI } from "./services/api.js";

const ratingSchema = z.object({
  userName: z.string().min(1, "Please enter your name"),
  itemName: z.string().min(1, "Item name is required"),
  rating: z.number().min(1, "Please select at least 1 star").max(5),
  comment: z.string().optional(),
});

function RatingPage() {
  const [formData, setFormData] = useState({
    userName: "",
    itemName: "",
    rating: 0,
    comment: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleRateClick = (value) => setFormData({ ...formData, rating: value });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    userName: formData.userName,
    itemName: formData.itemName,
    rating: formData.rating,
    comment: formData.comment,
  };

  try {
    
    console.log("Sending rating data to backend:", data);
    await submitRatingAPI(data);

  } catch (error) {
    console.error("Error sending rating data:", error);
  }
};

  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.ratingContainer}>
        <h2 className="heading mb-3 text-center">🌟 Rate an Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            className="form-control mb-2"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <div className="text-danger small">{errors.userName}</div>}

          <input
            type="text"
            name="itemName"
            placeholder="Enter item name"
            className="form-control mb-2"
            value={formData.itemName}
            onChange={handleChange}
          />
          {errors.itemName && <div className="text-danger small">{errors.itemName}</div>}

          <textarea
            name="comment"
            placeholder="Write your comment..."
            className="form-control mb-3"
            value={formData.comment}
            onChange={handleChange}
            rows="3"
          ></textarea>

          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((value) => (
              <i
                key={value}
                onClick={() => handleRateClick(value)}
                className={`bi bi-star-fill ${value <= formData.rating ? styles.active : ""}`}
                style={{ cursor: "pointer", fontSize: "1.5rem", color: value <= formData.rating ? "gold" : "gray" }}
              ></i>
            ))}
          </div>
          {errors.rating && <div className="text-danger small">{errors.rating}</div>}

          <button type="submit" className="btn btn-warning w-100 mt-3">
            Submit Rating
          </button>
        </form>

        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default RatingPage;
