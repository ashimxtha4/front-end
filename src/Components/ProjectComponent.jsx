/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ProjectTaskDetails from "./ProjectTaskDetails";
import "../Styles/ProjectComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectComponent = (props) => {
  useEffect(() => {
    const getAllProject = async () => {
      try {
        const allProjectData = await axios.get(
          "http://localhost:3000/project/getall",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        // console.log(allProjectData.data, "User token getone data.");
        setAllProjectsData(allProjectData.data.projects);
      } catch (err) {
        console.log("Error get request:", err);
      }
    };
    getAllProject();
  }, []);

  const [cardStatus, setState] = useState("complete");
  const [allProjectsData, setAllProjectsData] = useState();

  // console.log(allProjectsData, "Data state");

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
            onClick={() => setState("pending")}
            style={{
              color: cardStatus === "pending" && "#1f4583",
              textDecoration: cardStatus === "pending" && "underline",
              textDecorationThickness: cardStatus === "pending" && "2px",
              textUnderlineOffset: cardStatus === "pending" && "10px",
            }}
          >
            Currently (1)
          </button>
        </div>
        <div className="project-body-bot">
          {cardStatus === "complete"
            ? allProjectsData?.slice(0, 2).map(
                (data) => (
                  // data.status === cardStatus &&
                  <ProjectTaskDetails
                    projecttitle={data?.project_name}
                    projectstatus={data?.project_status}
                  />
                )
                // ) : <ProjectTaskDetails projecttitle={data.title} projectstatus={data.status} />
              )
            : cardStatus === "pending" &&
              allProjectsData?.slice(0, 2).map(
                (data) =>
                  data.project_status === cardStatus && (
                    <ProjectTaskDetails
                      projecttitle={data?.project_name}
                      projectstatus={data?.project_status}
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
