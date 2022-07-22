import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'

const Project = () => {
  return (
    <>
    <div className='tempelate-div'>
    <div className='side-div'>
      <SideBar />
    </div>
    <div className='content-div'>
      Projects
    </div>
    </div>
    </>
  )
}

export default Project