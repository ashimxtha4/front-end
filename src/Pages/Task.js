import React,{useEffect, useState} from 'react'
import SideBar from '../Components/SideBar'
import '../Styles/Task.css'
import {BsSearch} from 'react-icons/bs';
// import ProjectCard from '../Components/ProjectCard';
import TaskPopupComponent from '../Components/TaskPopupComponent';
// import { useDispatch} from "react-redux";
import TaskCard from "../Components/TaskCard";
import CreateTask from '../Components/Admin/CreateTask';

const taskArray = [
  {
    tid: 1,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "completed",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 2,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email2",
    status: "inprogress",
    userid: "u2",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 3,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email3",
    status: "completed",
    userid: "u3",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 4,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "assigned",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 1,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "completed",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 2,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email2",
    status: "inprogress",
    userid: "u2",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 3,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email3",
    status: "completed",
    userid: "u3",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 4,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "assigned",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 1,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "completed",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 2,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email2",
    status: "inprogress",
    userid: "u2",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 3,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email3",
    status: "completed",
    userid: "u3",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
  {
    tid: 4,
    firstName: "ashim",
    lastName: "shrestha",
    email: "email1",
    status: "assigned",
    userid: "u1",
    projectid: "p1",
    pmname: "Project Manager",
    taskName: "Task 1",
  },
];

const Task = () => {
  useEffect(() => {
    document.title = 'User Task';
  });

  const [taskStatus, setTaskStatus] = useState("all");
  const user = JSON.parse(localStorage.getItem("response")).user;
  console.log(user)

  const id = user._id;
  // dispatch(TaskAction(id));

  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("up");
    var popup = document.getElementById("popup");
    popup.classList.toggle("up");
  };

  const changeToAll = () => {
    setTaskStatus("all");
  };

  const changeToAssigned = () => {
    setTaskStatus("assigned");
  };

  const changeToInprogress = () => {
    setTaskStatus("inprogress");
  };

  const changeToCompleted = () => {
    setTaskStatus("completed");
  };

  return (
    <>
      <TaskPopupComponent onClick={toggle} />
      <div className="tempelate-div" id="blur">
        <div className="side-div">
          <SideBar />
        </div>
        <div className="user-project-main-div">
          <div className="admin-project-top-div">
            <div className="top-title-div">
              <h2>Tasks</h2>
            </div>
            <div className="top-btn-div">
              {/* <button className="top-btn">+ Create</button> */}
              {/* { */}
                {/* user.role_id.role==="PM"&& */}
                 <CreateTask />
              {/* } */}
            </div>
          </div>

          <div className="task-project-mid-div">
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToAll}
                style={{
                  color: taskStatus === "all" && "#1f4583",
                  textDecoration: taskStatus === "all" && "underline",
                  textDecorationThickness: taskStatus === "all" && "3px",
                  textUnderlineOffset: taskStatus === "all" && "10px",
                }}
              >
                All (6)
              </button>
            </div>
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToAssigned}
                style={{
                  color: taskStatus === "assigned" && "#1f4583",
                  textDecoration: taskStatus === "assigned" && "underline",
                  textDecorationThickness: taskStatus === "assigned" && "3px",
                  textUnderlineOffset: taskStatus === "assigned" && "10px",
                }}
              >
                To-do (2)
              </button>
            </div>
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToInprogress}
                style={{
                  color: taskStatus === "inprogress" && "#1f4583",
                  textDecoration: taskStatus === "inprogress" && "underline",
                  textDecorationThickness: taskStatus === "inprogress" && "3px",
                  textUnderlineOffset: taskStatus === "inprogress" && "10px",
                }}
              >
                In Progress (2)
              </button>
            </div>
            <div className="mid-btn-div">
              <button
                className="mid-btn"
                onClick={changeToCompleted}
                style={{
                  color: taskStatus === "completed" && "#1f4583",
                  textDecoration: taskStatus === "completed" && "underline",
                  textDecorationThickness: taskStatus === "completed" && "3px",
                  textUnderlineOffset: taskStatus === "completed" && "10px",
                }}
              >
                Completed (4)
              </button>
            </div>
            <div className="task-mid-input-div">
              <form className="task-mid-input-form">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="task-search-input-field"
                  id="search-input-field"
                  // maxLength={30}
                />
              </form>
              <div className="task-input-form-search-icon-div">
                <BsSearch className="task-input-form-search-icon" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="user-project-body-div">
            {taskStatus === "all"
              ? taskArray.map((items) => (
                  <TaskCard
                    title={items.title}
                    status={items.status}
                    pmname={items.pmname}
                    members={items.members}
                    firstName={items.firstName}
                    lastName={items.lastName}
                    taskName={items.taskName}
                    onClick={toggle}
                  />
                ))
              : taskStatus === "inprogress"
              ? taskArray.map(
                  (items) =>
                    items.status === taskStatus && (
                      <TaskCard
                        title={items.title}
                        status={items.status}
                        pmname={items.pmname}
                        members={items.members}
                        taskName={items.taskName}
                        firstName={items.firstName}
                        lastName={items.lastName}
                        onClick={toggle}
                      />
                    )
                )
              : taskStatus === "completed"
              ? taskArray.map(
                  (items) =>
                    items.status === taskStatus && (
                      <TaskCard
                        title={items.title}
                        status={items.status}
                        pmname={items.pmname}
                        firstName={items.firstName}
                        lastName={items.lastName}
                        members={items.members}
                        taskName={items.taskName}
                        onClick={toggle}
                      />
                    )
                )
              : taskStatus === "assigned"
              ? taskArray.map(
                  (items) =>
                    items.status === taskStatus && (
                      <TaskCard
                        title={items.title}
                        firstName={items.firstName}
                        lastName={items.lastName}
                        status={items.status}
                        pmname={items.pmname}
                        members={items.members}
                        taskName={items.taskName}
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

export default Task;
