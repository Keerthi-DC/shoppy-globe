// src/components/Checkout.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const items = useSelector(selectCartItems);
  const cartArray = Object.values(items);
  const grandTotal = cartArray.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  if (cartArray.length === 0) {
    return (
      <div className="checkout-page empty-checkout">
        <h2>🛒 Your cart is empty</h2>
        <p>Add items to your cart before proceeding to checkout.</p>
        <Link to="/" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Shipping Information</h3>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <p>Items: {cartArray.length}</p>
          <p>Grand Total: ₹{grandTotal.toFixed(2)}</p>
          <button className="btn" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
