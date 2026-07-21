// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product Detail</h2>
      <p>Details for product ID: {id}</p>
      <p>This is a placeholder component.</p>
    </div>
  );
}
