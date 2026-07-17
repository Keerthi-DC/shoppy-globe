// src/hooks/useFetchProducts.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          signal: controller.signal,
        });
        setProducts(response.data.products);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
};
