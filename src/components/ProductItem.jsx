// src/components/ProductItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import './ProductItem.css';
import './Button.css';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({ product }));
    alert('Product added to cart successfully!');
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="btn" onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
