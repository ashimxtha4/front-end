import React from 'react'
import "../Styles/ProjectTaskDetails.css"
import profilepicsmall from "../Images/profilepicsmall.png"
import improgressimg from "../Images/progressgoing.png"

const Projectprojectsprojects = () => {
  return (
    <div className='projects-details-main-div'>
        <div className='projects-details-title-div'>
          <h3>Projects Management System</h3>
        </div>
        <div className='projects-details-assigned-div'>
          <img src={profilepicsmall} alt="profilepic" />
          <img src={profilepicsmall} alt="profilepic" />
          <img src={profilepicsmall} alt="profilepic" />
        </div>
        <div className='projects-details-progress-div'>
            <img src={improgressimg} alt="" />
        </div>
    </div>
  )
}

export default Projectprojectsprojects