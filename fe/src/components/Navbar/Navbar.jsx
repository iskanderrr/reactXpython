import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-outer">
      <div className="navbar-logo-outer">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul className="navbar-links-outer">
        <li><Link className='button-filled' to="/donate-now">Donate</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/story">Share your story</Link></li>
      </ul>
    </nav>
  )
}