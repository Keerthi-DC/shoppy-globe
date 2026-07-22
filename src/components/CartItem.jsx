// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/cartSlice';
import { toast } from 'react-toastify';
import './CartItem.css';

export default function CartItem({ item }) {
  const { product, quantity } = item;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
    toast.success('Quantity increased');
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(product.id));
      toast.success('Quantity decreased');
    }
  };
  const handleRemove = () => {
    if (window.confirm('Remove this product?')) {
      dispatch(removeItem(product.id));
      toast.success('Item removed');
    }
  };

  return (
    <div className="cart-item">
      <img src={product.thumbnail} alt={product.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{product.title}</h4>
        <p className="cart-item-price">Price: ${product.price}</p>
        <p className="cart-item-quantity">Quantity: {quantity}</p>
        <p className="cart-item-subtotal">Subtotal: ${product.price * quantity}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
          <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
}
