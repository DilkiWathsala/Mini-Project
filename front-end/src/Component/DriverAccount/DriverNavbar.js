import React from 'react';
import { NavLink } from 'react-router-dom';

const DriverNavbar=()=>{
    return(
        <>

<div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info mb-3">
            <div className="container-fluid">
              
              
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLink to="/student-update">
                    <li className="nav-item nav-link active">Students</li>
                  </NavLink>
                  <NavLink to="/message">
                    <li className="nav-item nav-link active">Message</li>
                  </NavLink>
                  <NavLink to="/feedback">
                    <li className="nav-item nav-link active">Parents' Feedback</li>
                  </NavLink>
                  <NavLink to="/student-location">
                    <li className="nav-item nav-link active">Student Location</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
       
       
        </>
    )
}
export default DriverNavbar;