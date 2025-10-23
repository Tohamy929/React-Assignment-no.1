import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  return (
  <nav className="navbar navbar-expand-lg bg-dark w-100">
  <div className="container">
    <Link className={` navbar-brand text-white fw-bold fs-1`} to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className={`${location.pathname === '/about' ? 'active' : ''} nav-link text-white fw-bold fs-5 `} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`${location.pathname === '/portfolio' ? 'active' : ''} nav-link text-white fw-bold fs-5 `} to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item dropdown">
           <Link className={`${location.pathname === '/contact' ? 'active' : ''} nav-link text-white fw-bold fs-5 `} to="/contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

  )
}
