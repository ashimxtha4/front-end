import React from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";

const ProjectComponent = () => {
  return (
    <div className="project-main-div">
      <div className="project-title-div">
        <h2>Title Prop</h2>
      </div>

      <div className="project-body-div">
        <div className="project-body-top">
          <span>Overall</span>
          <span>Currently</span>
        </div>
        <div className="project-body-bot">
          <ProjectTaskDetails />
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
