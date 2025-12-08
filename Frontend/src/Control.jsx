import React, { useState } from "react";
import Bar from "./Bar";              // Navbar
import MostSaledItems from "./MostSaledItem";
import Cart from "./Cart";

function Control() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Navbar */}
      <Bar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />

      {/* Products List */}
      <MostSaledItems addToCart={addToCart} />

      {/* Cart Drawer */}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default Control;
