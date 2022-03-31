import React from "react";
import ParentNavbar from "./ParentNavbar";

const StudentDetails = () => {
  return (
    <div className="bottom">
      <ParentNavbar />
      <div className="container my-5 col-md-6 row">
      <h3 className="text-center text-info my-4 "><strong><em> Daily Updates </em></strong></h3>
      <table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Morning</th>
      <th scope="col">Afternoon</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2022/03/01</th>
      <td>1</td>
      <td>0</td>
      
    </tr>
    <tr>
      <th scope="row">2022/03/02</th>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">2022/03/03</th>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>

<div className="container my-5 col-md-6 row">
      <h3 className="text-center text-info my-4 "><strong><em> Payments  </em></strong> </h3>
      <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Amount of Charge</th>
      <th scope="col">Paid</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>3000</td>
      <td>1</td>
      
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>3000</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">March</th>
      <td>3000</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>

    </div>
  );
};
export default StudentDetails;
