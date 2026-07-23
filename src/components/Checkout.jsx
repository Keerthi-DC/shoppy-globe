// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, clearCart } from '../store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const items = useSelector(selectCartItems);
const dispatch = useDispatch();
  const cartArray = Object.values(items);
  const grandTotal = cartArray.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // error flags
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePhone = (value) => /^\d{10}$/.test(value);

  const handlePlaceOrder = () => {
    // Validate all fields before proceeding
    let valid = true;
    if (!fullName.trim()) { setFullNameError(true); valid = false; }
    if (!validateEmail(email)) { setEmailError(true); valid = false; }
    if (!address.trim()) { setAddressError(true); valid = false; }
    if (!validatePhone(phone)) { setPhoneError(true); valid = false; }
    if (!valid) {
      alert('Please correct the highlighted fields');
      return;
    }
    alert('Order placed successfully!');
    dispatch(clearCart());
    navigate('/');
  };

  // Input change handlers
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    if (fullNameError && e.target.value.trim()) setFullNameError(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && validateEmail(e.target.value)) setEmailError(false);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (addressError && e.target.value.trim()) setAddressError(false);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (phoneError && validatePhone(e.target.value)) setPhoneError(false);
  };

  // Blur handlers
  const handleFullNameBlur = () => {
    if (!fullName.trim()) setFullNameError(true);
  };
  const handleEmailBlur = () => {
    if (!validateEmail(email)) setEmailError(true);
  };
  const handleAddressBlur = () => {
    if (!address.trim()) setAddressError(true);
  };
  const handlePhoneBlur = () => {
    if (!validatePhone(phone)) setPhoneError(true);
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
            <input type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} onBlur={handleFullNameBlur} className={fullNameError ? 'error' : ''} />
          {fullNameError && <span className="error-message">Please enter your full name</span>}
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} className={emailError ? 'error' : ''} />
          {emailError && <span className="error-message">Enter a valid email address</span>}
          <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} onBlur={handleAddressBlur} className={addressError ? 'error' : ''} />
          {addressError && <span className="error-message">Please enter your address</span>}
          <input type="tel" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} onBlur={handlePhoneBlur} className={phoneError ? 'error' : ''} />
          {phoneError && <span className="error-message">Enter a valid phone number (10 digits)</span>}
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
