import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">E-Commerce</div>
    <div className="nav-links">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
        Products
      </NavLink>
      {/* <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}> */}
        {/* Dashboard */}
      {/* </NavLink> */}
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
        Login
      </NavLink>
      <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
        Register
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
