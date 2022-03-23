import React from 'react';
import { NavLink } from 'react-router-dom';

const ParentNavbar=()=>{
    return(
        <>

<div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info mb-3">
            <div className="container-fluid">
              
              
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLink to="/message">
                    <li className="nav-item nav-link active">Message</li>
                  </NavLink>
                  <NavLink to="/student-detail">
                    <li className="nav-item nav-link active">Student's Details</li>
                  </NavLink>
                  <NavLink to="/feedback">
                    <li className="nav-item nav-link active">Feedback</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
       
       
        </>
    )
}
export default ParentNavbar;