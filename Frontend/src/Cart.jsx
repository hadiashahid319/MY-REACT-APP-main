import React, { useContext } from "react";
import { ItemsContext } from "./contexts/ItemsContext.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(ItemsContext);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:5000/upload/mirrors/";

  // GRAND TOTAL
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src="https://source.unsplash.com/1600x900/?shopping"
          alt="bg"
        />
      </div>

      {/* Cart Container */}
      <div className={styles.container}>
        <h2 className={styles.heading}>🛍 Your Cart</h2>

        {cart.length === 0 ? (
          <p className={styles.empty}>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <img src={`${BASE_URL}${item.image}`} alt={item.name} />

                <div className={styles.info}>
                  <h5>{item.name}</h5>
                  <p className={styles.desc}>
                    {item.description || "No description"}
                  </p>
                  <p className={styles.price}>Rs {item.price}</p>

                  <div className={styles.quantity}>
                    <button onClick={() => decreaseQty(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item._id)}>+</button>
                  </div>

                  <p className={styles.lineTotal}>
                    Total: Rs {item.price * item.quantity}
                  </p>
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className={styles.grandTotal}>
              Grand Total: Rs {grandTotal}
            </div>

            <button
              className={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
