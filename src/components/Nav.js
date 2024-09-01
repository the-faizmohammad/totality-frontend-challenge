import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

const Nav = () => (
  <nav className="nav-container">
    <div className="logo">
      <Link to="/" className="nav-link">Nesting.com</Link>
    </div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/buy" className="nav-link">Buy Now</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
    </div>
    <div className="nav-user-info">
      <span className="nav-user">Signed in as: John Doe</span>
      <div className="cart-info">
        <Link to="/cart" className="nav-link">Cart (0)</Link>
      </div>
    </div>
  </nav>
);

export default Nav;
