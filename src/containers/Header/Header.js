import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Bookstore Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for books..." />
      </div>
      <div className="user-actions">
        <a href="">Sign In</a>
        <span> | </span>
        <a href="">Sign Up</a>
      </div>
      <div className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default Header;
