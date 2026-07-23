// src/components/ProductList.jsx
import React, { lazy, Suspense } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '../store/searchSlice';
const ProductItem = lazy(() => import('./ProductItem'));

import './ProductList.css';
import Loader from './Loader';
import { featuredProducts } from '../data/featuredProducts';



export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector(selectSearchTerm).toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(searchTerm));
  // Filter out non‑vegetarian items (e.g., chicken, beef, pork, fish, meat, shrimp, lamb, bacon, sausage)
  const vegetarian = filtered.filter(p => !/(chicken|beef|pork|fish|meat|shrimp|lamb|bacon|sausage)/i.test(p.title));
  const combined = [...featuredProducts, ...vegetarian];
  
  if (loading) return <Loader />;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="product-list" style={{ padding: '2rem' }}>
      <h2>Product List</h2>
        <div className="product-grid">
          <Suspense fallback={<Loader />}>
            {combined.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Suspense>
        </div>
    </div>
  );
}
