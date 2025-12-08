import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
      <img src={product.img} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p style={{ color: "green" }}>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
    </div>
  );
}

export default ProductCard;
