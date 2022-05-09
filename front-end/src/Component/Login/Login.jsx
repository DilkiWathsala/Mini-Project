import React from "react";
import "./LoginStyle.css";
import { useState,useEffect } from 'react';
import loginImage from "../Images/loginImage.jpg";
import { NavLink } from "react-router-dom";
import MainNavbar from "../Header/MainNavbar";

const Login = () => {
  const [login,setlogin] = useState(null);

  useEffect(()=>{
    
  })

  return (
    <div>
        <MainNavbar />
        <h2 className="text-center text-info mt-5 mb-4"><strong><em>Login Here</em></strong>  </h2>
      <div className="container bg-light"> 
        
        <form className="row">
          <div className="col-xs-12 col-md-6">
            <div className="mb-3">
              <label htlmfor="inputUsername" className="col-form-label mx-1 mt-2">
                Enter Your Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className="form-control col-md-6"
                id="inputUsername"
              />
            </div>
            <div className=" mb-5">
              <label htlmFor="inputPassword" className="col-form-label mx-1">
                Enter Your Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <fieldset className="row my-5">
              <legend className="col-form-label col-sm-2 pt-0">
                You are a:
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlfor="gridRadios1">
                    Driver
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlfor="gridRadios2">
                    Parent
                  </label>
                </div>
              </div>
            </fieldset>
            <NavLink to="/parent-message">
              <button
                type="submit"
                className="btn btn-primary col-xs-12 col-md-3 mb-4"
              >
                Login
              </button>
            </NavLink>
            <div className="mb-3">
            <p className="mb-1">
                Forgot Password?
                <NavLink to>Reset Password</NavLink>
              </p>
              <p>
                Don't you have an Account?
                <NavLink to="/sign-up">SignUp</NavLink>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 my-5">
            <div className="image">
              <img src={loginImage} alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
