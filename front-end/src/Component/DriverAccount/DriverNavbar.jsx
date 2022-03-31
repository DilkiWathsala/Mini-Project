import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Slide2.PNG";

const DriverNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary ">
        <img src={logo} alt="" className="logo mx-3" />
        <li class="navbar-brand nav-link  font-weight-bold">Safe Transport</li>

        <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <NavLink to="/student-update">
              <li class="nav-item nav-link mx-2">Students</li>
            </NavLink>
            <NavLink to="/driver-message">
              <li class="nav-item nav-link mx-2">Message</li>
            </NavLink>
            <NavLink to="/driver-feedback">
              <li class="nav-item nav-link mx-2">Parents' Feedback</li>
            </NavLink>
            <NavLink to="/student-location">
              <li class="nav-item nav-link mx-2">Student Location</li>
            </NavLink>
          </ul>

          <form class="form-inline my-2 mx-auto my-lg-0">
            <NavLink to="/">
              <button class="btn btn-outline-light my-2 my-sm-0 " type="submit">
                Logout
              </button>
            </NavLink>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default DriverNavbar;
