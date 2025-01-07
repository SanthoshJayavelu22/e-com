import React from "react";
import CartItem from "../components/cartitem/CartItem";

const CartPage = ({ cartItems, updateCartItem, removeCartItem }) => {
  const calculateTotal = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateCartItem={updateCartItem}
              removeCartItem={removeCartItem}
            />
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
