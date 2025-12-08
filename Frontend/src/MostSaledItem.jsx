import React from "react";
import PIC from "./assets/Hom/mirror1.jpg";
import second from "./assets/Hom/5.jpg";
import third from "./assets/Hom/vase.jpg";
import fourth from "./assets/Hom/2.jpg";
import styles from "./MostSaledItems.module.css"; 
import { useNavigate } from "react-router-dom";

function MostSaledItem() {
  const navigate = useNavigate();

  const items = [
    { src: PIC, name: "MIRRORS", price: 1500 },
    { src: second, name: "CANDLES", price: 800 },
    { src: third, name: "VASES", price: 1200 },
    { src: fourth, name: "FRAMES", price: 1000 },
    { src: PIC, name: "MIRRORS", price: 1500 },
    { src: second, name: "CANDLES", price: 800 },
    { src: third, name: "VASES", price: 1200 },
    { src: PIC, name: "MIRRORS", price: 1500 },
    { src: second, name: "CANDLES", price: 800 },
    { src: third, name: "VASES", price: 1200 },
    { src: PIC, name: "MIRRORS", price: 1500 },
    { src: second, name: "CANDLES", price: 800 },
  ];


  const addToCart = (item) => {
    localStorage.setItem("cartItem", JSON.stringify(item));
    navigate("/checkout");
  };

  return (
    <section id="gallery" className={styles.section}>
      <div className="container py-5">
        <h2 className={styles.heading}>MOST SOLD ITEMS</h2>
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className={styles.card}>
                <img src={item.src} alt={item.name} className={styles.image} />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>Rs. {item.price}</p>
                <button onClick={() => addToCart(item)}>🛒 Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostSaledItem;
