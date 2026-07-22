// src/components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const items = useSelector(selectCartItems);
  const navigate = useNavigate();

  const cartArray = Object.values(items);
  const total = cartArray.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartArray.length === 0) {
    return (
      <div className="cart page" style={{ padding: '2rem' }}>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart page" style={{ padding: '2rem' }}>
      <h2>Cart</h2>
      <div className="cart-items">
        {cartArray.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
