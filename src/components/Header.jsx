// src/components/Header.jsx
import logo from '../assets/shoppyglobe_logo.png';
import { Link, useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';
import { selectCartItems } from '../store/cartSlice';
import './Button.css';
import './Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalQty = Object.values(cartItems).reduce((sum, i) => sum + i.quantity, 0);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <nav className="nav">

          <Link to="/" className="logo">
            <img src={logo} alt="ShoppyGlobe logo" className="logo-img" />
            ShoppyGlobe
          </Link>
        <ul className="nav-links">
            <li><button className="btn nav-button" onClick={() => navigate('/')}>Home</button></li>
            <li><button className="btn nav-button" onClick={() => navigate('/cart')}>Cart ({totalQty})</button></li>
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
