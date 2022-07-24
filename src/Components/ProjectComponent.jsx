import React from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";

const ProjectComponent = (props) => {
  return (
    <div className="project-main-div">
      <div className="project-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="project-body-div">
        <div className="project-body-top">
          <button>{props.cardtabtitle1}</button>
          <button>{props.cardtabtitle2}</button>
        </div>
        <div className="project-body-bot">
          <ProjectTaskDetails  />
          <ProjectTaskDetails />
        </div>

        <div className="project-footer-div">
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
