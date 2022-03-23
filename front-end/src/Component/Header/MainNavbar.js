import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import './MainNavbarStyle.css';

const MainNavbar=()=>{
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info mb-3">
            <div className="container-fluid">
              <NavLink to="/">
                <img 
                  src={logo} 
                  alt="" 
                  className="logo" 
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLink to="/">
                    <li className="nav-item nav-link active">Home</li>
                  </NavLink>
                  <NavLink to="/about">
                    <li className="nav-item nav-link active">About</li>
                  </NavLink>
                  <NavLink to="/login">
                    <li className="nav-item nav-link active">Login</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
}
export default MainNavbar;