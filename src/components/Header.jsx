// src/components/Header.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';
import { selectCartItems } from '../store/cartSlice';
import './Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQty = Object.values(cartItems).reduce((sum, i) => sum + i.quantity, 0);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <nav className="nav">
        <ThemeToggle />
        <Link to="/" className="logo">ShoppyGlobe</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({totalQty})</Link></li>
        </ul>
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="search-input"
        />
      </nav>
    </header>
  );
}
