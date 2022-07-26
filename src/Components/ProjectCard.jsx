import React from 'react'
import './ProjectCard.css'
import progressgoing from '../Images/progressgoing.png'
import Group1 from '../Images/Group1.svg'

const ProjectComponent = (props) => {
  return (
    <div className='projectcard'>
        <div className='projectcard-in'>
            <h2>
              Project Name
            </h2>
            <div className='inprogress-div'>
              <img src={progressgoing} alt='circle'/>
              <p>In Progress</p>
            </div>
            <p className='pm'>PM Name</p>
        </div>

        
        <div className='members'>
          <p className='members-p'>Members</p>
          
            <div className='image-div'><img src={Group1} alt='image'/></div>
        </div>


        <div className='bottom-view'>
          <a href='#' className='blue-link' onClick={props.onClick}>View</a>
        </div>

    </div>
  )
}

export default ProjectComponent