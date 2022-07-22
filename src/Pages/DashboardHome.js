import React from "react";
import ProjectComponent from "../Components/ProjectComponent";
import EventComponent from "../Components/EventComponent";
import "../Styles/DashboardHome.css"
import TeamMemberComponent from "../Components/TeamMemberComponent";

const DashboardHome = () => {
  return (
    <div class="body-main-div">
      <div class="body-title-div">
        <h2>Welcome, User</h2>
      </div>
      <div class="body-card-div-1">
        <ProjectComponent cardtitle="My Tasks" cardtabtitle1="Overall" cardtabtitle2="To do"/>
        <ProjectComponent cardtitle="My Projects" cardtabtitle1="Overall" cardtabtitle2="Currently"/>
        <TeamMemberComponent cardtitle="Team Members" membername="Nice Name" memberposition="UI/UX Designer"/>
      </div>
      <div class="body-card-div-2">
        <EventComponent />
      </div>
    </div>
  );
};

export default DashboardHome;
