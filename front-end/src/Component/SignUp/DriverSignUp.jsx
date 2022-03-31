import React from "react";
import loginImage from "../Images/loginImage.jpg";
import { NavLink } from "react-router-dom";
import "./SignUpStyle.css";
import MainNavbar from "../Header/MainNavbar";

const DriverSignUp = () => {
  return (
    <div className="bottom1">
      <MainNavbar />
      <h2 className="text-center text-info mt-5 mb-4"><strong><em>If You are a Driver SignUp Here</em></strong></h2>
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
                Mobile No:
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
              <label htlmfor="inputNICNumber" className="col-form-label mx-1">
                NIC No:
              </label>
              <input
                type="text"
                placeholder="Enter Your National Identity Card Number"
                className="form-control col-md-6"
                id="inputNICNumber"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputDLNumber" className="col-form-label mx-1">
                Driving Lisence No:
              </label>
              <input
                type="text"
                placeholder="Enter Your Driving Lisence Number"
                className="form-control col-md-6"
                id="inputDLNumber"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputDistrict" className="col-form-label mx-1">
                Hiring District:
              </label>
              <input
                type="text"
                placeholder="Enter the Districts Where You Provide Transportation"
                className="form-control col-md-6"
                id="inputDistrict"
              />
            </div>
            <div className="mb-2">
              <label htlmfor="inputDistrict" className="col-form-label mx-1">
                Schools:
              </label>
              <input
                type="text"
                placeholder="Enter the Schools Where You Provide Transportation"
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

            <NavLink to="/student-update">
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
export default DriverSignUp;
