import React from "react";
import "../Styles/Admin/AdminProjectCard.css";
import profilepicsmall from "../Images/profilepicsmall1.png";

const AdminProjectCard = () => {
  return (
    <div className="admin-project-card">
      <div className="card-status-div">
        <p>In Progress</p>
      </div>
      <div className="card-title-div">
        <h2>Project Name</h2>
        <p className="card-pm-div">PM Name</p>
      </div>

      <div className="card-members-div">
        <p className="members-p">Members</p>

        <div className="image-div">
          <img src={profilepicsmall} alt="" />
        </div>
      </div>

      <div className="card-bot-div">
        <a href="#" className="blue-link" onClick="">
          View
        </a>
      </div>
    </div>
  );
};

export default AdminProjectCard;
