// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { featuredProducts } from '../data/featuredProducts';
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

  // Fallback for featured items that aren't in the API
  const fallbackProduct = featuredProducts.find(p => p.id.toString() === id);
  const displayProduct = product || fallbackProduct;

  const handleAddToCart = () => {
    dispatch(addItem({ product: displayProduct }));
    toast.success('Added to cart');
  };

  if (loading) return <Loader />;
  if (error) return <p className="error">Error loading product.</p>;
  if (!displayProduct) return <p>Product not found.</p>;

  return (
    <div className="product-detail page" style={{ padding: '2rem' }}>
      <h2>{displayProduct.title}</h2>
      <div className="detail-grid">
        <img src={displayProduct.thumbnail} alt={displayProduct.title} className="detail-image" />
        <div className="detail-info">
          <p className="detail-description">{displayProduct.description}</p>
          <p className="detail-price">Price: ₹{displayProduct.price}</p>
          <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
