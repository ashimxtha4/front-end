import React from 'react'
import './ProjectCard.css'

const ProjectComponent = () => {
  return (
    <div className='projectcard'>
        <div className='projectcard-in'>
            <h2>
              Project Name
            </h2>
            <div className='inprogress-div'>
              <img src='' alt='circle'/>
              <p>In Progress</p>
            </div>
            <p>PM Name</p>
        </div>

        
        <div className='members'>
          <p className=''>Members</p>
          <img src='' alt='image'/>
            <div className=''></div>
        </div>


        <div className='bottom-view'>
          <a href='#' className='blue-link'>View</a>
        </div>

    </div>
  )
}

export default ProjectComponent