import React, { useContext } from "react";
import { ItemsContext } from "./contexts/ItemsContext.jsx";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cart } = useContext(ItemsContext);

  const BASE_URL = "http://localhost:5000/upload/mirrors/";

  // ------------ TOTAL CALCULATION ----------------
  const subtotal = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const total = subtotal;

  // ------------ PAYMENT HANDLER ------------------
  const handleCheckout = () => {
    console.log("🧾 PAYMENT RECEIVED!");
    console.log("Customer Order:", cart);
    console.log("Total Amount:", total);
    alert("Payment Successful! (Check Console)");
  };

  return (
    <div className={styles.checkoutContainer}>
      
      {/* ---------------- LEFT SIDE FORM ---------------- */}
      <div className={styles.formSection}>
        <h2 className={styles.title}>Checkout Page</h2>

        {/* Contact Info */}
        <h3 className={styles.sectionTitle}>Contact Information</h3>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Email or Mobile Number" />
        </div>

        {/* Shipping Address */}
        <h3 className={styles.sectionTitle}>Shipping Address</h3>

        <div className={styles.row}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className={styles.formGroup}>
          <input type="text" placeholder="Address" />
        </div>

        <div className={styles.formGroup}>
          <input type="text" placeholder="Apartment, Suite, etc (optional)" />
        </div>

        <div className={styles.row}>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code" />
        </div>

        <button className={styles.continueBtn}>Continue Shipping</button>
      </div>

      {/* ---------------- RIGHT SIDE CART SUMMARY ---------------- */}
      <div className={styles.summarySection}>
        <h3 className={styles.summaryTitle}>Order Summary</h3>

        {cart.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            
            {/* Item Image */}
            <img
              src={`${BASE_URL}${item.image}`}
              alt={item.name}
              className={styles.itemImg}
            />

            <div className={styles.itemInfo}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemQty}>Qty: 1</p>
            </div>

            <p className={styles.price}>Rs {item.price}</p>
          </div>
        ))}

        {/* Subtotal + Total */}
        <div className={styles.totalBox}>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>Rs {subtotal}</span>
          </div>
          <div className={styles.totalRow}>
            <strong>Total:</strong>
            <strong>Rs {total}</strong>
          </div>
        </div>

        <button className={styles.checkoutBtn} onClick={handleCheckout}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
