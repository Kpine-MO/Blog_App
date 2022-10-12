import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
      
      <nav className="nav">
        <NavLink
            className="link"
            to="/"
            exact
            >
            Home
        </NavLink>
        <NavLink
            className="link"
            to="/about"
            exact
            >
            About
        </NavLink>
        <NavLink
            className="link"
            to="/login"
            exact
            >
            Login
        </NavLink>
        <NavLink
            className="link"
            to="/account"
            exact
            >
            Account
        </NavLink>
        <NavLink
            className="link"
            to="/logout"
            exact
            >
            Logout
        </NavLink>
        </nav>   
    
  )
}

export default Navbar