import React from "react";
import ProjectComponent from "../Components/ProjectComponent";
import EventComponent from "../Components/EventComponent";
import NoticeComponent from "../Components/NoticeComponent";
import "../Styles/DashboardHome.css"
import TeamMemberComponent from "../Components/TeamMemberComponent";
import MyTaskComponent from "../Components/MyTaskComponent";

const DashboardHome = () => {
  return (
    <div class="body-main-div">
      <div class="body-title-div">
        <h2>Welcome, User</h2>
      </div>
      <div class="body-card-div-1">
        <MyTaskComponent cardtitle="My Tasks" cardtabtitle1="Ok" cardtabtitle2="Nice"/>
        <ProjectComponent cardtitle="My Projects" cardtabtitle1="Overall" cardtabtitle2="Currently"/>
        <TeamMemberComponent cardtitle="Team Members" membername="Nice Name" memberposition="UI/UX Designer"/>
      </div>
      <div class="body-card-div-2">
        <EventComponent />
        <NoticeComponent />
      </div>
    </div>
  );
};

export default DashboardHome;
