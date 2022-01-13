import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="#">
          React Contact Manager
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
