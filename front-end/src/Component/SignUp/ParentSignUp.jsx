import React from "react";
import loginImage from "../Images/loginImage.jpg";
import { NavLink } from "react-router-dom";
import MainNavbar from "../Header/MainNavbar";

const ParentSignUp = () => {
  return (
    <div className="bottom1">
      <MainNavbar />
      <h2 className="text-center text-info mt-5 mb-4"><strong><em>If You are a Parent SignUp Here</em></strong></h2>
      <div className="container bg-light">
        <form className="row">
          <div className="col-xs-12 col-md-6">
            <div className="mb-2">
              <label htlmfor="inputName" className="col-form-label mx-1 mt-2">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="form-control col-md-6"
                id="inputName"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputAddress" className="col-form-label mx-1">
                Address:
              </label>
              <input
                type="text"
                placeholder="Enter Your Home Address"
                className="form-control col-md-6"
                id="inputAddress"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputPhoneNumber" className="col-form-label mx-1">
                Telephone No:
              </label>
              <input
                type="phone"
                placeholder="Enter Your Contact Number"
                className="form-control col-md-6"
                id="inputPhoneNumber"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputEmail" className="col-form-label mx-1">
                E-mail:
              </label>
              <input
                type="email"
                placeholder="Enter Your E-mail Address"
                className="form-control col-md-6"
                id="inputEmail"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputStudentName" className="col-form-label mx-1">
                Student's Name:
              </label>
              <input
                type="text"
                placeholder="Enter Your Student's Name"
                className="form-control col-md-6"
                id="inputStudentName"
              />
            </div>
            <div className="mb-2">
              <label
                htlmfor="inputStudentSchool"
                className="col-form-label mx-1"
              >
                Student's School:
              </label>
              <input
                type="text"
                placeholder="Enter Your Student's School"
                className="form-control col-md-6"
                id="inputStudentSchool"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputDistrict" className="col-form-label mx-1">
                Living District:
              </label>
              <input
                type="text"
                placeholder="Enter Your Living District"
                className="form-control col-md-6"
                id="inputDistrict"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputUsername" className="col-form-label mx-1">
                Username:
              </label>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="form-control col-md-6"
                id="inputUsername"
              />
            </div>
            <div className=" mb-5">
              <label htlmFor="inputPassword" className="col-form-label mx-1">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
                id="inputPassword"
              />
            </div>

            <NavLink to="/parent-message">
              <button
                type="submit"
                className="btn btn-primary col-xs-12 col-md-3 mb-5"
              >
                SignUp
              </button>
            </NavLink>
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
export default ParentSignUp;
