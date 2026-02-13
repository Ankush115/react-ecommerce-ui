import React from "react";
import "./Cart.css";

function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart ({items.length} items)</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <span className="quantity-label">Qty: {item.quantity}</span>
              <span className="subtotal">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <button className="remove-btn" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Total Items:</span>
          <span className="summary-value">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="summary-row total">
          <span className="summary-label">Total Price:</span>
          <span className="summary-value">${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="checkout-btn" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
