import { useState } from "react";
function Cart() {

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  }
  return (
    <>
      <button onClick={handleIncrease} style={{border:"2px solid black"}}>+</button>
      <p style={{border:"2px solid black"}}>{quantity} </p>
      <button onClick={handleDecrease} style={{border:"2px solid black"}}>-</button>
    </>
  );
}

export default Cart;