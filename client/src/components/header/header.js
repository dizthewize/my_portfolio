import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header id="nav">
    <div className="container">
      <div className="logo">
        <h2>Martez Conner</h2>
      </div>
      <ul className="navbar-items">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/projects">Projects</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
