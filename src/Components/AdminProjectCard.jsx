import React from "react";
import "../Styles/Admin/AdminProjectCard.css";
import profilepicsmall from "../Images/profilepicsmall1.png";

const AdminProjectCard = (props) => {
  return (
    <div className="admin-project-card">
      <div className="card-status-div">
        {props.status === "inprogress" ? (
          <p style={{ color: "orange" }}>{props.status}</p>
        ) : props.status === "completed" ? (
          <p style={{ color: "green" }}>{props.status}</p>
        ) : null}
      </div>
      <div className="card-title-div">
        <h2>{props.title}</h2>
        <p className="card-pm-div">{props.pmname}</p>
      </div>

      <div className="card-members-div">
        <p className="members-p">Members</p>

        <div className="image-div">
          <img src={props.members} alt="" />
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
