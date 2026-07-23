// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { toast } from 'react-toastify';
import { useFetchProductDetail } from '../hooks/useFetchProductDetail';
import Loader from './Loader';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductDetail(id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ product }));
    toast.success('Added to cart');
  };

  if (loading) return <Loader />;
  if (error) return <p className="error">Error loading product.</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail page" style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <div className="detail-grid">
        <img src={product.thumbnail} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <p className="detail-description">{product.description}</p>
          <p className="detail-price">Price: ₹{product.price}</p>
          <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
