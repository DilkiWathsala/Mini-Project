import React from "react";
import ParentNavbar from "./ParentNavbar";
import { NavLink } from "react-router-dom";

const ParentFeedback = () => {
  return (
    <div>
      <ParentNavbar />
      <h2 className="text-center text-info mt-5 mb-4"><strong><em>Your Feedback</em></strong></h2>

      <form className="container bg-light col-md-6">
        <div className="form-group">
          <label for="exampleFormControlInput1" className="my-2">
            Username:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="exampleFormControlInput1"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlInput1" className="mb-2">
            Driver's ID:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="exampleFormControlInput2"
            placeholder="Enter the driver's ID"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1" className="mb-2">
            Feedback:
          </label>
          <textarea
            className="form-control mb-5"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <NavLink to>
          <button
            type="submit"
            className="btn btn-primary col-xs-12 col-md-3 mb-5"
          >
            Submit
          </button>
        </NavLink>
      </form>
    </div>
  );
};
export default ParentFeedback;
