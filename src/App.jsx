// src/App.jsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';
import { selectMode } from './store/themeSlice';

// Lazy‑load route components
const Header = lazy(() => import('./components/Header'));
const HomePage = lazy(() => import('./components/ProductList'));
const DetailPage = lazy(() => import('./components/ProductDetail'));
const CartPage = lazy(() => import('./components/Cart'));
const CheckoutPage = lazy(() => import('./components/Checkout'));
const NotFoundPage = lazy(() => import('./components/NotFound'));

export default function App() {
  const mode = useSelector(selectMode);
  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      {/* Header appears on every route */}
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
