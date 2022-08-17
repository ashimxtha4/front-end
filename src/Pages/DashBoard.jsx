// import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import ProjectComponent from "../Components/ProjectComponent";
import EventComponent from "../Components/EventComponent";
import NoticeComponent from "../Components/NoticeComponent";
import "../Styles/DashboardHome.css";
import TeamMemberComponent from "../Components/TeamMemberComponent";
import MyTaskComponent from "../Components/MyTaskComponent";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const DashBoard = () => {
  useEffect(() => {
    document.title = 'User Dashboard';
  });

  const user = JSON.parse(localStorage.getItem("response"));
  console.log(user);

  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <SideBar />
        </div>
        <div className="content-div">
          <div class="body-main-div">
            <div class="body-title-div">
              <h2>Welcome {user?.firstName} </h2>
            </div>
            <div class="body-card-div-1">
              <MyTaskComponent
                cardtitle="My Tasks"
                cardtabtitle1="Overall (4)"
                cardtabtitle2="To-do (2)"
              />
              <ProjectComponent
                cardtitle="My Projects"
                cardtabtitle1="Overall (3)"
                cardtabtitle2="Currently (1)"
              />
              <TeamMemberComponent
                cardtitle="Team Members"
                membername="Nice Name"
                memberposition="UI/UX Designer"
              />
            </div>
            <div class="body-card-div-2">
              <EventComponent />
              <NoticeComponent />
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={6000} />
      </div>
    </>
  );
};

export default DashBoard;
