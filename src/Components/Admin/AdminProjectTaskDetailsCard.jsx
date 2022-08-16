import React from "react";
import "../../Styles/Admin/AdminProjectTaskDetailsCard.css";
import profilepicsmall from "../../Images/profilepicsmall1.png";
import { BsFillCircleFill, BsCalendar4Week } from "react-icons/bs";

const AdminProjectTaskDetailsCard = (props) => {
  return (
    <div className="admintask-project-card">
      <div className="admincard-status-div">
        {props.status === "inprogress" ? (
          <div className="card-status-div-inner">
            <BsFillCircleFill
              className="card-status-inner-icon"
              style={{ color: "#FA6B2D" }}
            />
            <p style={{ color: "#FA6B2D" }}>In Progress</p>
          </div>
        ) : props.status === "completed" ? (
          <div className="card-status-div-inner">
            <BsFillCircleFill
              className="card-status-inner-icon"
              style={{ color: "#00D563" }}
            />
            <p style={{ color: "#00D563" }}>Completed</p>
          </div>
        ) : props.status === "assigned" ? (
          <div className="card-status-div-inner">
            <BsFillCircleFill
              className="card-status-inner-icon"
              style={{ color: "#65c0c0" }}
            />
            <p style={{ color: "#65c0c0" }}>Assigned</p>
          </div>
        ) : null}
      </div>
      <div className="admincard-title-div">
        <h2>{props.taskName}</h2>
      </div>

      <div className="admintask-members-div">
        <div className="admintask-assigned-by-div">
          <div className="task-assigned-by-div-p">
            <p>
              Assigned to: {props.firstName} {props.lastName}
            </p>
          </div>
          <div className="task-assigned-img-div">
            <img src={profilepicsmall} alt="nice" />
          </div>
        </div>
        <div className="adminprojecttask-date-div">
          <div className="adminprojecttask-date">
            <p>
              Due Date: <span style={{ color: "#646464" }}>15 Aug, 2022</span>
            </p>
          </div>
          <div className="adminprojecttask-icon">
            <BsCalendar4Week />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectTaskDetailsCard;
