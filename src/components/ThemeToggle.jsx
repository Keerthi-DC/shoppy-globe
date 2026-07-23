// src/components/ThemeToggle.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode, selectMode } from '../store/themeSlice';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <button className="theme-toggle" onClick={handleToggle} aria-label="Toggle theme">
      {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
