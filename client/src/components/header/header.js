import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header id="nav">
    <div className="container">
      <div className="logo">
        <Link to="/"><h2>Martez Conner</h2></Link>
      </div>
      <ul className="navbar-items">
        <li className="nav-item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li className="nav-item"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </div>
  </header>
);

export default Header;
