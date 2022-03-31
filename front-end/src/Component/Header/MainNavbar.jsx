import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Slide2.PNG";
import "./MainNavbarStyle.css";

const MainNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary ">

        <img src={logo} alt="" className="logo mx-3" />
        <li class="navbar-brand nav-link  font-weight-bold">Safe Transport</li>

        <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <NavLink to="/">
              <li class="nav-item nav-link mx-2">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li class="nav-item nav-link mx-2">About</li>
            </NavLink>
            <NavLink to="/login">
              <li class="nav-item nav-link mx-2">Login</li>
            </NavLink>
          </ul>
          <form class="form-inline my-2 mx-auto my-lg-0">
            <NavLink to="/sign-up">
              <button class="btn btn-outline-light my-2 my-sm-0 " type="submit">
                SignUp
              </button>
            </NavLink>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default MainNavbar;
