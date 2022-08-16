import React, { useState } from "react";
// import AdminProjectCard from "../../Components/AdminProjectCard";
import AdminSidebar from "../../Components/Admin/AdminSidebar";
import "../../Styles/Admin/AdminProjectTasks.css";
import smallpic from "../../Images/profilepicsmall.png";
import { BsSearch } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import AdminProjectTaskDetailsCard from "../../Components/Admin/AdminProjectTaskDetailsCard";
import AdminProjectMembers from "../../Components/Admin/AdminProjectMembers";

const allTaskDetails = [
  {
    firstName: "First",
    lastName: "Last",
    title: "Task Management System",
    status: "inprogress",
    pmname: "Project Manager 1",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
  {
    firstName: "First",
    lastName: "Last",
    title: "Taskit",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
  {
    firstName: "First",
    lastName: "Last",
    title: "Fantech",
    status: "completed",
    pmname: "Project Manager 3",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
  {
    firstName: "First",
    lastName: "Last",
    title: "Nice One",
    status: "inprogress",
    pmname: "Project Manager 1",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
  {
    firstName: "First",
    lastName: "Last",
    title: "Project 2",
    status: "completed",
    pmname: "Project Manager 2",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
  {
    firstName: "First",
    lastName: "Last",
    title: "Project 3",
    status: "completed",
    pmname: "Project Manager 3",
    members: [{ smallpic }],
    projectName: "Task Management System",
  },
];

const AdminProjectTasks = () => {
  const [taskDetail, setTaskDetail] = useState("tasks");

  const changeToTasks = () => {
    setTaskDetail("tasks");
  };

  const changeToMembers = () => {
    setTaskDetail("members");
  };

  return (
    <div className="tempelate-div">
      <div className="side-div">
        <AdminSidebar />
      </div>
      <div className="admin-projectdetails-main-div">
        <div className="admin-projectdetails-top-div">
          <Link exact to="/admin/project">
            <button type="button" className="admin-projectdetails-title-btn">
              <BsArrowLeftCircle className="admin-projectdetails-title-icon" />
            </button>
          </Link>
          <div className="top-title-div">
            <h2>{allTaskDetails[0].title}</h2>
          </div>
        </div>
        <div className="admin-projectdetails-mid-div">
          <div className="mid-btn-div">
            <button
              className="mid-btn"
              onClick={changeToTasks}
              style={{
                color: taskDetail === "tasks" && "#1f4583",
                textDecoration: taskDetail === "tasks" && "underline",
                textDecorationThickness: taskDetail === "tasks" && "3px",
                textUnderlineOffset: taskDetail === "tasks" && "10px",
              }}
            >
              Tasks
            </button>
          </div>
          <div className="mid-btn-div">
            <button
              className="mid-btn"
              onClick={changeToMembers}
              style={{
                color: taskDetail === "members" && "#1f4583",
                textDecoration: taskDetail === "members" && "underline",
                textDecorationThickness: taskDetail === "members" && "3px",
                textUnderlineOffset: taskDetail === "members" && "10px",
              }}
            >
              Members
            </button>
          </div>
          <div className="admindetails-mid-input-div">
            <form className="admindetails-mid-input-form">
              <input
                type="text"
                placeholder={
                  taskDetail === "tasks" ? "Search Task" : "Search Member"
                }
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
        <div className={taskDetail === "tasks" ? "admin-project-body-div" : "admin-projectdetails-body-div"}>
          {taskDetail === "tasks" ?
            allTaskDetails.map((items) => (
              <AdminProjectTaskDetailsCard
                firstName={items.firstName}
                lastName={items.lastName}
                title={items.title}
                status={items.status}
                pmname={items.pmname}
                members={items.members}
                taskName={items.title}
              />
            )) : <AdminProjectMembers />}
        </div>
      </div>
    </div>
  );
};

export default AdminProjectTasks;
