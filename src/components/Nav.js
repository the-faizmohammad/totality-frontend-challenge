import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/" className="nav-link" onClick={closeMenu}>Nesting.com</Link>
      </div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/buy" className="nav-link" onClick={closeMenu}>Buy Now</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        <div className="nav-user-info">
          <span className="nav-user">Signed in as: John Doe</span>
          <div className="cart-info">
            <Link to="/cart" className="nav-link" onClick={closeMenu}>
              Cart (
              {cartCount}
              )
            </Link>
          </div>
        </div>
        <button type="button" className="close-btn" onClick={toggleMenu}>Close</button>
      </div>
      {!menuOpen && (
        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      )}
    </nav>
  );
};

export default Nav;
