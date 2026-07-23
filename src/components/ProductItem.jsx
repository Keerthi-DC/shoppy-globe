// src/components/ProductItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../store/cartSlice';
import './ProductItem.css';
import './Button.css';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addItem({ product }));
    alert('Product added to cart successfully!');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-title-link">
        <img src={product.thumbnail} alt={product.title} className="product-image" loading="lazy" />
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <p className="product-price">₹{product.price}</p>
      <button className="btn" onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
