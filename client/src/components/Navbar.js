import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Law Across Borders Logo" />
      <span>Law Across Borders</span>
    </div>
    <div className="navbar-links">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
      <NavLink to="/interviews" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Interviews</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Contact</NavLink>
    </div>
  </nav>
);

export default Navbar; 