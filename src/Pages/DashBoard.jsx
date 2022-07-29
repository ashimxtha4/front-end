import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'
import ProjectComponent from "../Components/ProjectComponent";
import EventComponent from "../Components/EventComponent";
import NoticeComponent from "../Components/NoticeComponent";
import "../Styles/DashboardHome.css"
import TeamMemberComponent from "../Components/TeamMemberComponent";
import MyTaskComponent from "../Components/MyTaskComponent";
import { useSelector } from 'react-redux';


const DashBoard = () => {
  const {loginState} = useSelector(state => state.logIn);
  console.log(loginState,"user asdasdasd sa")
  return (
    <>
    <div className='tempelate-div'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <div class="body-main-div">
            <div class="body-title-div">
              <h2>Welcome, User </h2>
            </div>
          <div class="body-card-div-1">
            <MyTaskComponent cardtitle="My Tasks" cardtabtitle1="Overall (4)" cardtabtitle2="To-do (2)"/>
            <ProjectComponent cardtitle="My Projects" cardtabtitle1="Overall (3)" cardtabtitle2="Currently (1)"/>
            <TeamMemberComponent cardtitle="Team Members" membername="Nice Name" memberposition="UI/UX Designer"/>
          </div>
          <div class="body-card-div-2">
            <EventComponent />
            <NoticeComponent />
          </div>
          </div>
      </div>
    </div>
    </>
    
  )
}

export default DashBoard;
