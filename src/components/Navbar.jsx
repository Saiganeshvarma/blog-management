import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Blog System</Link>
        <div id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;