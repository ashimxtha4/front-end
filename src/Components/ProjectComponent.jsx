/* eslint-disable array-callback-return */
import React, { useState,useEffect } from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const [projects,setProject] = useState([]);
  useEffect(() => {
      const getProject = async()=>{
      const authToken = sessionStorage.getItem("token")
      const projects= await axios.get(`${URL}/project/getall`,
      { headers: { 'Authorization': `Bearer ${authToken}`}});

      var arr = []
      projects.map((data)=>{
        const user= JSON.parse(localStorage.getItem("response")).user.id
        const projectmembers =axios.get (`${URL}/getAllProjectMembers/:${data.id}`)
        if (projectmembers.includes(user))
          arr.push(data)
      })
      setProject(arr);
    }
    getProject();
  });

  return (
    <div className="project-main-div">
      <div className="project-title-div">
        <h2>My Projects</h2>
      </div>

      <div className="project-body-div">
        <div className="project-body-top">
          <button
            onClick={() => setState("complete")}
            style={{
              color: cardStatus === "complete" && "#1f4583",
              textDecoration: cardStatus === "complete" && "underline",
              textDecorationThickness: cardStatus === "complete" && "2px",
              textUnderlineOffset: cardStatus === "complete" && "10px",
            }}
          >
            Overall (3)
          </button>
          <button
            onClick={() => setState("inprogress")}
            style={{
              color: cardStatus === "inprogress" && "#1f4583",
              textDecoration: cardStatus === "inprogress" && "underline",
              textDecorationThickness: cardStatus === "inprogress" && "2px",
              textUnderlineOffset: cardStatus === "inprogress" && "10px",
            }}
          >
            Currently (1)
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
              )}
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
