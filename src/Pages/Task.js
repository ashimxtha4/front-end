import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'


const Task = () => {
  return (
    <>
    <div className='heading'>
                <h1 className='logo'>
                    TaskIt
                </h1>
        </div>
    <div className='tempelate-div'>
    <div className='side-div'>
      <SideBar />
    </div>
    <div className='content-div'>
      Task
    </div>
    </div>
    </>
  )
}

export default Task