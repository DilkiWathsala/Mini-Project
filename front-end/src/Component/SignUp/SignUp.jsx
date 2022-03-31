import React from "react";
import loginImage from "../Images/loginImage.jpg";
import "../Login/LoginStyle.css";
import { NavLink } from "react-router-dom";
import MainNavbar from "../Header/MainNavbar";

const SignUp = () => {
  return (
    <div>
      <MainNavbar />
      <h2 className="text-center text-info mt-5 mb-4"><strong><em>Choose Your Position Here</em></strong></h2>
      <div className="container bg-light">
        <form className="row mx-5">
          <div className="col-xs-12 col-md-6">
            <h2 className="mt-4"><strong> I am a </strong></h2>
            <div className="button1 my-5">
              <NavLink to="/parent-signup">
                <button
                  type="submit"
                  className="btn btn-primary col-xs-12 col-md-3 mb-50"
                >
                  Parent
                </button>
              </NavLink>
            </div>
            <div className="button2 my-5">
              <NavLink to="/driver-signup">
                <button
                  type="submit"
                  className="btn btn-primary col-xs-12 col-md-3 mb-50"
                >
                  Driver
                </button>
              </NavLink>
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
};
export default SignUp;
