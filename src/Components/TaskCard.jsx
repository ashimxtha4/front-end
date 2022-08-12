import React from "react";
import "../Styles/TaskCard.css";
import profilepicsmall from "../Images/profilepicsmall1.png";
import { BsArrowRight, BsFillCircleFill } from "react-icons/bs";

const TaskCard = (props) => {
  return (
    <div className="task-project-card">
      <div className="card-status-div">
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
      <div className="card-title-div">
        <h2>{props.taskName}</h2>
      </div>

      <div className="task-members-div">
        <div className="task-assigned-by-div">
          <div className="task-assigned-by-div-p">
            <p>Assigned by: {props.pmname}</p>
          </div>
          <div className="task-assigned-img-div">
            <img src={profilepicsmall} alt="nice"/>
          </div>
        </div>
        <div className="task-assigned-by-div">
        <div className="task-assigned-by-div-p">
            <p>Assigned to: {props.firstName} {props.lastName}</p>
          </div>
          <div className="task-assigned-img-div">
            <img src={profilepicsmall} alt="nice"/>
          </div>
        </div>
      </div>

      <div className="card-bot-div">
        <a href="#" className="bot-link" onClick={props.onClick}>
          View
          <BsArrowRight className="bot-icon-div" />
        </a>
      </div>
    </div>
  );
};

export default TaskCard;
