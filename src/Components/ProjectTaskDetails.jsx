import React from "react";
import "../Styles/ProjectTaskDetails.css";
import profilepicsmall from "../Images/profilepicsmall.png";
import { BsFillCircleFill } from "react-icons/bs";

const Projectprojectsprojects = (props) => {
  return (
    <div className="projects-details-main-div">
      <div className="projects-details-title-div">
        <h3>{props.projecttitle}</h3>
      </div>
      <div className="projects-details-assigned-div">
        <img src={profilepicsmall} alt="profilepic" />
        <img src={profilepicsmall} alt="profilepic" />
        <img src={profilepicsmall} alt="profilepic" />
      </div>
      <div className="projects-details-progress-div">
        <div className="projects-details-icon">
          {props.projectstatus === "complete" ? (
            <BsFillCircleFill style={{ color: "green" }} />
          ) : (
            <BsFillCircleFill style={{ color: "orange" }} />
          )}
        </div>
        <div className="projects-details-name">
          {/* <h3>{props.projectstatus}</h3> */}
          {props.projectstatus === "inprogress" ? (
            <h3 style={{ color: "orange" }}>In Progress</h3>
          ) : props.projectstatus === "complete" ? (
            <h3 style={{ color: "green" }}>Completed</h3>
          ) : (
            <h3 style={{ color: "gray" }}>Assigned</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectprojectsprojects;
