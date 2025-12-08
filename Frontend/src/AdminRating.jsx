import React, { useState, useEffect } from "react";
import styles from "./AdminRating.module.css";

export default function AdminRating() {
  const [ratings, setRatings] = useState([]);

  // ✅ Load real ratings from localStorage
  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("userRatings")) || [];
    setRatings(storedRatings);
  }, []);

  return (
    <div className={styles.ratingsPage}>
      <div className="container mt-4">
        <h3 className="text-center mb-4">
          ⭐ User Ratings Overview (Admin Panel)
        </h3>

        {ratings.length === 0 ? (
          <div className="alert alert-secondary text-center">
            No user ratings yet — users haven’t submitted any reviews.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Item Name</th>
                  <th>Stars</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {ratings.map((r, index) => (
                  <tr key={r.id || index}>
                    <td>{index + 1}</td>
                    <td>{r.userName}</td>
                    <td>{r.itemName}</td>
                    <td>
                      {"⭐".repeat(r.stars)}{" "}
                      {"☆".repeat(5 - r.stars)}
                    </td>
                    <td>{r.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
