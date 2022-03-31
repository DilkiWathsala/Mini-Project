import React from "react";
import DriverNavbar from "./DriverNavbar";
import "./DriverStyle.css";

const Students = () => {
  return (
    <div className="bottom">
      <DriverNavbar />
      <div className="container  col-md-6">
      <h3 className="text-center text-info my-4"><strong><em> Payments  </em></strong> </h3>

      <table className="table table-hover table-bordered mb-5">
        <thead className="text-center">
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">School</th>
            <th scope="col">Home Town</th>
            <th scope="col">Monthly Charge (LKR)</th>
            <th scope="col">Paid? or No?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>A</td>
            <td>Holy Family Girls' College</td>
            <td>Negombo</td>
            <td>3000</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>B</td>
            <td>St. Joseph Vaz College</td>
            <td>Chilaw</td>
            <td>4500</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>C</td>
            <td>Royal College</td>
            <td>Colombo 7</td>
            <td>2000</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-center text-info my-4"><strong><em> Daily Updates </em></strong></h3>

      <table class="table table-hover table-bordered">
        <thead className="text-center">
          <tr>
            <th scope="col" rowspan="2">
              Date
            </th>
            <th scope="col" rowspan="2">
              Time
            </th>
            <th scope="col" colspan="6">
              Student's Name
            </th>
          </tr>
          <tr>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">C</th>
            <th scope="col">D</th>
            <th scope="col">E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowspan="2">
              2022/03/01
            </th>
            <th>Morning</th>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th>Afternoon</th>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>

          <tr>
            <th scope="row" rowspan="2">
              2022/03/02
            </th>
            <th>Morning</th>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
          <th>Afternoon</th>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>

          <tr>
            <th scope="row" rowspan="2">
              2022/03/03
            </th>
            <th>Morning</th>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
          <th>Afternoon</th>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default Students;
