import React from "react";
import "../Styles/Admin/AdminProjectCard.css";
import profilepicsmall from "../Images/profilepicsmall1.png";
import { BsArrowRight, BsFillCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="admin-project-card">
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
        ) : null}
      </div>
      <div className="card-title-div">
        <h2>{props.title}</h2>
        <p className="card-pm-div">{props.pmname}</p>
      </div>

      <div className="card-members-div">
        <p className="members-p">Members</p>

        <div className="profile-image-div">
          <img src={profilepicsmall} alt="" />
          <img src={profilepicsmall} alt="" />
          <img src={profilepicsmall} alt="" />
          <img src={profilepicsmall} alt="" />
          <img src={profilepicsmall} alt="" />
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

export default ProjectCard;
