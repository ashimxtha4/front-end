import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Admin/AdminProjectMembers.css";

const members = [
  {
    sn: 1,
    firstName: "Ashim",
    lastName: "Shrestha",
    email: "a@s.com",
    phone: 9841060253,
    designation: "Full Stack Developer",
    projects: 4,
  },
  {
    sn: 2,
    firstName: "Ashim",
    lastName: "Shrestha",
    email: "a@s.com",
    phone: 9841060253,
    designation: "Full Stack Developer",
    projects: 4,
  },
];

const AdminProjectMembers = () => {
  return (
    <div class="admin-project-member-div">
      <p className="table-lable">Project Members</p>
      <div className="dashboard-table">
        <div className="table-row" style={{ backgroundColor: "#E5EEFF" }}>
          <div className="table-data table-head">
            <b>S.No</b>
          </div>
          <div className="table-data table-head">
            <b>First Name</b>
          </div>
          <div className="table-data table-head">
            <b>Last Name</b>
          </div>
          <div className="table-data table-head">
            <b>Email Addres</b>
          </div>
          <div className="table-data table-head">
            <b>Phone Number</b>
          </div>
          <div className="table-data table-head">
            <b>Designations</b>
          </div>
          <div className="table-data table-head">
            <b>No. of Projects</b>
          </div>
          <div className="table-data table-head">
            <b>ashim</b>
          </div>
        </div>
        {members.map((data) => (
          <div className="table-row">
            <div className="table-data table-head">{data.sn}</div>
            <div className="table-data table-head">{data.firstName}</div>
            <div className="table-data table-head">{data.lastName}</div>
            <div className="table-data table-head">{data.email}</div>
            <div className="table-data table-head">{data.phone}</div>
            <div className="table-data table-head">{data.designation}</div>
            <div className="table-data table-head">{data.projects}</div>
            <div className="table-data table-head">ashim</div>
          </div>
        ))}
      </div>
      <div className="table-footer-div">
        <Link exact to="/task">
          View More
        </Link>
      </div>
    </div>
  );
};

export default AdminProjectMembers;
