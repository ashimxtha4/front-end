import React from 'react'
import "../Styles/ProjectTaskDetails.css"
import profilepicsmall from "../Images/profilepicsmall.png"
import improgressimg from "../Images/progressgoing.png"

const ProjectTaskDetails = () => {
  return (
    <div className='task-details-main-div'>
        <div className='task-details-title-div'>
          <h3>Task Management System</h3>
        </div>
        <div className='task-details-assigned-div'>
          <img src={profilepicsmall} alt="profilepic" />
          <img src={profilepicsmall} alt="profilepic" />
          <img src={profilepicsmall} alt="profilepic" />
        </div>
        <div className='task-details-progress-div'>
            <img src={improgressimg} alt="" />
        </div>
    </div>
  )
}

export default ProjectTaskDetails