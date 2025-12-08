import React, { useContext, useState, useEffect } from "react";
import { ItemsContext } from "./contexts/ItemsContext";
import { useNavigate } from "react-router-dom";
import styles from "./MirrorsGallery.module.css";

function MirrorsGallery() {
  const { items, addToCart } = useContext(ItemsContext);
  const [mirrors, setMirrors] = useState([]);
  const [selectedMirror, setSelectedMirror] = useState(null);

  const navigate = useNavigate();  // ⭐ navigation

  const BASE_URL = "http://localhost:5000/upload/mirrors/";

  useEffect(() => {
    const filtered = items.filter(
      (i) => i.category?.toLowerCase() === "mirror"
    );
    setMirrors(filtered);
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>ALL SELECTED GALLERY</h1>

      <div className={styles.container}>
        {mirrors.map((mirror) => (
          <div key={mirror._id} className={styles.card}>
            <img
              src={`${BASE_URL}${mirror.image}`}
              className={styles.image}
              onClick={() => setSelectedMirror(mirror)}
            />

            <div className={styles.info}>
              <h3>{mirror.name}</h3>
              <p>Rs {mirror.price}</p>

              <button
                className={styles.button}
                onClick={() => {
                  addToCart(mirror);
                  navigate("/cart");  // ⭐ Go to Cart page
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMirror && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMirror(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMirror.name}</h2>
            <img src={`${BASE_URL}${selectedMirror.image}`} style={{ width: "100%" }} />
            <p>{selectedMirror.description}</p>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMirror(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MirrorsGallery;
