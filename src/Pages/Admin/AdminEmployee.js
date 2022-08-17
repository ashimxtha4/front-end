import React, { useEffect } from "react";
import AdimSidebar from "../../Components/Admin/AdminSidebar.js";
import {Link} from "react-router-dom"
import "../../Styles/Admin/AdminDashboard.css";
// import AdminDashboardCard from "../../Components/Admin/AdminDashboardCard";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'Admin Employee';
  });

  const user=JSON.parse(localStorage.getItem('response')).user;
  console.log(user)



  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <AdimSidebar />
        </div>
        <div className="content-div">
            <h1>employee</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
