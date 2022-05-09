import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Data from "./Apidata";
import MainNavbar from "../Header/MainNavbar";
import "./HomeStyle.css";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <h1 className="text-center text-info my-5">
        <strong>
          <em>
            SELECT THE MOST SUITABLE SCHOOL VAN FOR YOUR CHILD
          </em>
        </strong>
      </h1>

      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline">
          <input
            className="form-control col-md-6 mx-5"
            type="search"
            placeholder="Search by Your Living District"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary my-2 mx-5" type="submit">
            Search
          </button>
          <input
            className="form-control col-md-6 mx-5"
            type="search"
            placeholder="Search by the Student's School"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary my-2 mx-5" type="submit">
            Search
          </button>
        </form>
      </nav>

      {/* card section */}

      <div className="container bottom">
        <div className="row">
          {Data.map((values) => {
            return (
              <>
                <Card
                  driverName={values.driverName}
                  contactNo={values.contactNo}
                  district={values.district}
                  schools={values.schools}
                  rating={values.rating}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
