import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'


const DashBoard = () => {
  return (
    <>
    <div className='tempelate-div'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        DashBoard
      </div>
    </div>
    </>
    
  )
}

export default DashBoard