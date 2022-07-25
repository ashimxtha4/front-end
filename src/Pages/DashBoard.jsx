import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'
import DashboardHome from "./DashboardHome";


const DashBoard = () => {
  return (
    <>
    <div className='tempelate-div'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <DashboardHome />
      </div>
    </div>
    </>
    
  )
}

export default DashBoard;
