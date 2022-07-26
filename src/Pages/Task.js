import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'
import {BsSearch} from 'react-icons/bs';
import ProjectCard from '../Components/ProjectCard';

const Task = () => {
  return (
    <>
    <div className='tempelate-div'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <div className='selection-div'>
            <div className='button-div'>
              <span><button className='selection-button'>Overall</button></span>
              <span><button className='selection-button'>Currently</button></span>
            </div>
          <from className='selection-div-form'>
            <input type="text" className='search' placeholder='search' />
            <button className='selection-button'>{<BsSearch />}</button>
          </from>
        </div>



        <div className='bottom-div'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Task