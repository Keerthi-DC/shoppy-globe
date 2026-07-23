// src/hooks/useFetchProductDetail.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();

    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`,
          { signal: controller.signal }
        );
        setProduct(response.data);
      } catch (err) {
        // If the product is not found (404), treat it as a non‑fatal case and let the fallback product be used.
        if (err.response && err.response.status === 404) {
          // No product data, but not an error for the UI.
          setError(null);
        } else if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();

    return () => controller.abort();
  }, [productId]);

  return { product, loading, error };
};
