import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import "../Styles/Project.css";
import { BsSearch } from "react-icons/bs";
import ProjectCard from "../Components/ProjectCard";
import PopupComponent from "../Components/PopupComponent";
import smallpic from "../Images/profilepicsmall.png";
// import AdminProjectCard from "../Components/AdminProjectCard";

const projectArray = [
  {
    title: "Task Management System",
    status: "inprogress",
    pmname: "Project Manager 1",
    members: [{ smallpic }],
  },
  {
    title: "Taskit",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
  },
  {
    title: "Fantech",
    status: "completed",
    pmname: "Project Manager 3",
    members: [{ smallpic }],
  },
  {
    title: "Nice One",
    status: "inprogress",
    pmname: "Project Manager 1",
    members: [{ smallpic }],
  },
  {
    title: "Project 2",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
  },
  {
    title: "Project 3",
    status: "completed",
    pmname: "Project Manager 3",
    members: [{ smallpic }],
  },
  {
    title: "Project 4",
    status: "inprogress",
    pmname: "Project Manager 4",
    members: [{ smallpic }],
  },
  {
    title: "Project 5",
    status: "inprogress",
    pmname: "Project Manager 5",
    members: [{ smallpic }],
  },
  {
    title: "Taskit",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
  },
  {
    title: "Fantech",
    status: "completed",
    pmname: "Project Manager 3",
    members: [{ smallpic }],
  },
  {
    title: "Nice One",
    status: "inprogress",
    pmname: "Project Manager 1",
    members: [{ smallpic }],
  },
  {
    title: "Project 2",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
  },
];

const Project = () => {
  // const [status, setStatus] = useState("overall");
  const [projectState, setProjectState] = useState("all");

  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("up");
    var popup = document.getElementById("popup");
    popup.classList.toggle("up");
  };

  const changeToAll = () => {
    setProjectState("all");
  };

  const changeToInprogress = () => {
    setProjectState("inprogress");
  };

  const changeToCompleted = () => {
    setProjectState("completed");
  };

  return (
    <>
      <PopupComponent onClick={toggle} />
      <div className="tempelate-div" id="blur">
        <div className="side-div">
          <SideBar />
        </div>
        <div className="user-project-main-div">
          <div className="admin-project-top-div">
            <div className="top-title-div">
              <h2>Projects</h2>
            </div>
            <div className="top-btn-div">
              <button className="top-btn">+ Create</button>
            </div>
          </div>
          <div className="user-project-mid-div">
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToAll}
                style={{
                  color: projectState === "all" && "#1f4583",
                  textDecoration: projectState === "all" && "underline",
                  textDecorationThickness: projectState === "all" && "3px",
                  textUnderlineOffset: projectState === "all" && "10px",
                }}
              >
                All (6)
              </button>
            </div>
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToCompleted}
                style={{
                  color: projectState === "completed" && "#1f4583",
                  textDecoration: projectState === "completed" && "underline",
                  textDecorationThickness:
                    projectState === "completed" && "3px",
                  textUnderlineOffset: projectState === "completed" && "10px",
                }}
              >
                Completed (4)
              </button>
            </div>
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToInprogress}
                style={{
                  color: projectState === "inprogress" && "#1f4583",
                  textDecoration: projectState === "inprogress" && "underline",
                  textDecorationThickness:
                    projectState === "inprogress" && "3px",
                  textUnderlineOffset: projectState === "inprogress" && "10px",
                }}
              >
                In Progress (2)
              </button>
            </div>
            <div className="mid-input-div">
              <form className="mid-input-form">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="search-input-field"
                  id="search-input-field"
                  // maxLength={30}
                />
              </form>
              <div className="input-form-search-icon-div">
                <BsSearch className="input-form-search-icon" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="user-project-body-div">
            {projectState === "all"
              ? projectArray.map((items) => (
                  <ProjectCard
                    title={items.title}
                    status={items.status}
                    pmname={items.pmname}
                    members={items.members}
                    onClick={toggle}
                  />
                ))
              : projectState === "inprogress"
              ? projectArray.map(
                  (items) =>
                    items.status === projectState && (
                      <ProjectCard
                        title={items.title}
                        status={items.status}
                        pmname={items.pmname}
                        members={items.members}
                        onClick={toggle}
                      />
                    )
                )
              : projectState === "completed"
              ? projectArray.map(
                  (items) =>
                    items.status === projectState && (
                      <ProjectCard
                        title={items.title}
                        status={items.status}
                        pmname={items.pmname}
                        members={items.members}
                        onClick={toggle}
                      />
                    )
                )
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
