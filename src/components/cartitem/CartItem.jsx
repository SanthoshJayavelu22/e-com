import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateCartItem, removeCartItem }) => {
  const handleQuantityChange = (amount) => {
    const newQuantity = item.quantity + amount;

    if (newQuantity > 0) {
      updateCartItem(item.id, newQuantity); 
    } else {
      removeCartItem(item.id); 
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          <button onClick={() => removeCartItem(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
