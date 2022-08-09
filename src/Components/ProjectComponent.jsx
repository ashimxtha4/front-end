/* eslint-disable array-callback-return */
import React, { useState } from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";
import { Link } from "react-router-dom";

const projectArray = [
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
  {
    title: "Project 3",
    status: "complete",
  },
  {
    title: "Project 3",
    status: "complete",
  },
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
  {
    title: "Project 3",
    status: "complete",
  },
  {
    title: "Project 3",
    status: "complete",
  },
];

const ProjectComponent = (props) => {
  const [cardStatus, setState] = useState("complete");

  // const changeOverAll = () => {
  //   setState("overall");
  // };

  // const changeCurrently = () => {
  //   setState("inprogress");
  // };

  return (
    <div className="project-main-div">
      <div className="project-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="project-body-div">
        <div className="project-body-top">
          <button onClick={() => setState("complete")}>
            {props.cardtabtitle1}
          </button>
          <button onClick={() => setState("inprogress")}>
            {props.cardtabtitle2}
          </button>
        </div>
        <div className="project-body-bot">
          {cardStatus === "complete"
            ? projectArray.map(
                (data) => (
                  // data.status === cardStatus &&
                  <ProjectTaskDetails
                    projecttitle={data.title}
                    projectstatus={data.status}
                  />
                )
                // ) : <ProjectTaskDetails projecttitle={data.title} projectstatus={data.status} />
              )
            : cardStatus === "inprogress" &&
              projectArray.map(
                (data) =>
                  data.status === cardStatus && (
                    <ProjectTaskDetails
                      projecttitle={data.title}
                      projectstatus={data.status}
                    />
                  )
                // ) : <ProjectTaskDetails projecttitle={data.title} projectstatus={data.status} />
              )}
          {/* {cardStatus === "overall"
            ? projectArray.slice(0, 10).map((item, index) => {
                  return (
                    <ProjectTaskDetails
                      projecttitle={item.title}
                      projectstatus={item.status}
                    />
                  );
              })
            : projectArray.slice(0, 2).map((item, index) => {
                  return (
                    <ProjectTaskDetails
                      projecttitle={item.title}
                      projectstatus={item.status}
                    />
                  );
              })} */}
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
