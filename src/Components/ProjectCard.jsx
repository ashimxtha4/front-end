import React from 'react'
import '../Styles/ProjectCard.css'
// import progressgoing from '../Images/progressgoing.png'
import {GoPrimitiveDot} from 'react-icons/go';
import Group1 from '../Images/Group1.svg'

const ProjectComponent = (props) => {
  return (
    <div className='projectcard'>
        <div className='projectcard-in'>
            <div className='status-div' style={{color: props.status==="assigned"? "grey":
              props.status==="inprogress"?"#FA6B2D":"#00D563" }}>
              <GoPrimitiveDot />
              <p>{props.status}</p>
            </div>
            <h2>
              {props.name}
            </h2>
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