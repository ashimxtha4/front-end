import React, { useState } from "react";
import AdminProjectCard from "../../Components/AdminProjectCard";
import AdminSidebar from "../../Components/Admin/AdminSidebar";
import "../../Styles/Admin/AdminProject.css";
import smallpic from "../../Images/profilepicsmall.png";
import { BsSearch } from "react-icons/bs";

const allProjectArray = [
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
];

const inprogressProjectArray = [
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
];

const completedProjectArray = [
  {
    title: "Project 6",
    status: "completed",
    pmname: "Project Manager 6",
    members: [{ smallpic }],
  },
  {
    title: "Project 7",
    status: "completed",
    pmname: "Project Manager 7",
    members: [{ smallpic }],
  },
];

const AdminProject = () => {
  const [projectState, setProjectState] = useState("All");

  const changeToAll = () => {
    setProjectState("All");
  };

  const changeToInprogress = () => {
    setProjectState("Inprogress");
  };

  const changeToCompleted = () => {
    setProjectState("Completed");
  };

  return (
    <div className="tempelate-div">
      <div className="side-div">
        <AdminSidebar />
      </div>
      <div className="admin-project-main-div">
        <div className="admin-project-top-div">
          <div className="top-title-div">
            <h2>Projects</h2>
          </div>
          <div className="top-btn-div">
            <button className="top-btn">+ Create</button>
          </div>
        </div>
        <div className="admin-project-mid-div">
          <div className="mid-btn-div">
            <button
              className="mid-btn"
              onClick={changeToAll}
              style={{
                color: projectState === "All" && "#1f4583",
                textDecoration: projectState === "All" && "underline",
                textDecorationThickness: projectState === "All" && "3px",
                textUnderlineOffset: projectState === "All" && "10px",
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
                color: projectState === "Completed" && "#1f4583",
                textDecoration: projectState === "Completed" && "underline",
                textDecorationThickness: projectState === "Completed" && "3px",
                textUnderlineOffset: projectState === "Completed" && "10px",
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
                color: projectState === "Inprogress" && "#1f4583",
                textDecoration: projectState === "Inprogress" && "underline",
                textDecorationThickness: projectState === "Inprogress" && "3px",
                textUnderlineOffset: projectState === "Inprogress" && "10px",
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
        <div className="admin-project-body-div">
          {projectState === "All"
            ? allProjectArray.map((items) => {
                return (
                  <AdminProjectCard
                    title={items.title}
                    status={items.status}
                    pmname={items.pmname}
                    members={items.members}
                  />
                );
              })
            : projectState === "Inprogress"
            ? inprogressProjectArray.map((items) => {
                return (
                  <AdminProjectCard
                    title={items.title}
                    status={items.status}
                    pmname={items.pmname}
                    members={items.members}
                  />
                );
              })
            : projectState === "Completed"
            ? completedProjectArray.map((items) => {
                return (
                  <AdminProjectCard
                    title={items.title}
                    status={items.status}
                    pmname={items.pmname}
                    members={items.members}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default AdminProject;
