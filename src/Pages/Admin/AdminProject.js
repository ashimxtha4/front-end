import React from "react";
import AdminProjectCard from "../../Components/AdminProjectCard";
import SideBar from "../../Components/SideBar";
import "../../Styles/Admin/AdminProject.css";

const AdminProject = () => {
  return (
    <div className="tempelate-div">
      <div className="side-div">
        <SideBar />
      </div>
      <div className="admin-project-main-div">
        <div className="admin-project-top-div">
          <div className="top-title-div">
            <h2>Project</h2>
          </div>
          <div className="top-btn-div">
            <button className="top-btn">+ Create</button>
          </div>
        </div>
        <div className="admin-project-mid-div">
          <div className="mid-btn-div">
            <button className="mid-btn">All</button>
          </div>
          <div className="mid-btn-div">
            <button className="mid-btn">Completed</button>
          </div>
          <div className="mid-btn-div">
            <button className="mid-btn">In-progress</button>
          </div>
          <div className="mid-input-div">
            <input type="text" placeholder="search"></input>
          </div>
        </div>
        <hr></hr>
        <div className="admin-project-body-div">
          <AdminProjectCard />
          <AdminProjectCard />
          <AdminProjectCard />
        </div>
      </div>
    </div>
  );
};

export default AdminProject;
