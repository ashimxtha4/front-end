import React from "react";
import AdimSidebar from "E:/front-end/src/Components/Admin/AdminSidebar.js";
import {Link} from "react-router-dom"
import "E:/front-end/src/Styles/Admin/AdminDashboard.css";
// import AdminDashboardCard from "../../Components/Admin/AdminDashboardCard";

const AdminProfile = () => {

  const user=JSON.parse(localStorage.getItem('response')).user;
  console.log(user)


  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <AdimSidebar />
        </div>
        <div className="content-div">
            <h1>profile</h1>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
