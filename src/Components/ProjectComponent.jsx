/* eslint-disable array-callback-return */
import React, { useState } from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";
import { Link } from "react-router-dom";

const projectArrayOverall = [
  {
    title: "Project 1",
    status: "complete",
  },
  {
    title: "Project 2",
    status: "inprogress",
  },
  {
    title: "Project 3",
    status: "complete",
  },
];

const projectCurrently = [
  {
    title: "Project 4",
    status: "assigned",
  },
  {
    title: "Project 5",
    status: "inprogress",
  },
  {
    title: "Project 6",
    status: "complete",
  },
];

const ProjectComponent = (props) => {
  const [cardStatus, setState] = useState("overall");

  const changeOverAll = () => {
    setState("overall");
  };

  const changeCurrently = () => {
    setState("currently");
  };

  return (
    <div className="project-main-div">
      <div className="project-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="project-body-div">
        <div className="project-body-top">
          <button onClick={changeOverAll}>{props.cardtabtitle1}</button>
          <button onClick={changeCurrently}>{props.cardtabtitle2}</button>
        </div>
        <div className="project-body-bot">
          {cardStatus === "overall"
            ? projectArrayOverall.map((item, index) => {
                if (index < 2)
                  return (
                    <ProjectTaskDetails
                      projecttitle={item.title}
                      projectstatus={item.status}
                    />
                  );
              })
            : projectCurrently.map((item, index) => {
                if (index < 2)
                  return (
                    <ProjectTaskDetails
                      projecttitle={item.title}
                      projectstatus={item.status}
                    />
                  );
              })}
        </div>

        <div className="project-footer-div">
          <Link exact to="/projects">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
