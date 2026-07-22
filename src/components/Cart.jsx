// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, clearCart } from '../store/cartSlice';
import CartItem from './CartItem';
import { useNavigate, Link } from 'react-router-dom';
import './Cart.css';
import './Button.css';

export default function Cart() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartArray = Object.values(items);
  const itemCount = cartArray.reduce((sum, { quantity }) => sum + quantity, 0);
  const subtotal = cartArray.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
  const delivery = 0; // free delivery
  const tax = 0; // placeholder
  const grandTotal = subtotal + delivery + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
    alert('Cart emptied successfully!');
  };

  if (cartArray.length === 0) {
    return (
        <div className="empty-cart" style={{ padding: '2rem' }}>
          <h2>🛒 Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/">
            <button className="btn">Continue Shopping</button>
          </Link>
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
        <div className="summary-details">
          <p>Items: {itemCount}</p>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Delivery: Free</p>
          <p>Tax: ₹0.00</p>
        </div>
          <div className="cart-actions">
            <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
            <button className="btn" onClick={handleCheckout} disabled={cartArray.length === 0}>Proceed to Checkout</button>
            <button className="btn" onClick={handleEmptyCart}>Empty Cart</button>
          </div>
      </div>
    </div>
  );
}
