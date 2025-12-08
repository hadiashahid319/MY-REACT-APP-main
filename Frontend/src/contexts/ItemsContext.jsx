import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("userCart") || "[]")
  );

  // Fetch items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("https://my-react-app-main-llmi.vercel.app/api/items");
        setItems(res.data);
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    };
    fetchItems();
  }, []);

  // Add to cart
  const addToCart = (item) => {
    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("userCart", JSON.stringify(updated));
  };

  // Remove item
  const removeFromCart = (id) => {
    const updated = cart.filter((i) => i._id !== id);
    setCart(updated);
    localStorage.setItem("userCart", JSON.stringify(updated));
  };
  const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

  return (
    <ItemsContext.Provider
      value={{ items, cart, addToCart, removeFromCart , increaseQty, decreaseQty }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
