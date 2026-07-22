// src/components/ProductList.jsx
import React from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '../store/searchSlice';
import ProductItem from './ProductItem';
import './ProductList.css';
import Loader from './Loader';

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector(selectSearchTerm).toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(searchTerm));

  if (loading) return <Loader />;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="product-list" style={{ padding: '2rem' }}>
      <h2>Product List</h2>
      <div className="product-grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
