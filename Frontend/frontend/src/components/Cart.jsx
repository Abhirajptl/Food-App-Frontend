import  { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const handleCheckout = () => {
    alert("Order placed!");
    setCart([]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;