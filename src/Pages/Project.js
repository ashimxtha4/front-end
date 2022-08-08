import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import '../Styles/Project.css'
import {BsSearch} from 'react-icons/bs';
import ProjectCard from '../Components/ProjectCard';
import PopupComponent from '../Components/PopupComponent';


const Project = () => {
  const [status,setStatus]=useState("overall")
  const toggle=()=>{
    var blur = document.getElementById('blur');
    blur.classList.toggle('up');
    var popup = document.getElementById('popup');
    popup.classList.toggle('up');
  }
  return (
    <>
    <PopupComponent onClick={toggle} />
    <div className='tempelate-div' id='blur'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <div className='selection-div'>
            <div className='button-div'>
              <button className='selection-button' style={{borderBottom:status==="overall"&&"solid 1px",color:status==="overall"&&"#002093"}} onClick={()=>{setStatus("overall")}}>Overall</button>
              <button className='selection-button' style={{borderBottom:status==="currently"&&"solid 1px",color:status==="currently"&&"#002093"}} onClick={()=>{setStatus("currently")}}>Currently</button>
            </div>
          <from className='selection-div-form'>
            <input type="text" className='search' placeholder='search' />
            <button className='selection-button'>{<BsSearch />}</button>
          </from>
        </div>



        <div className='bottom-div'>
          <ProjectCard onClick={toggle} />
          <ProjectCard onClick={toggle} />
          <ProjectCard onClick={toggle} />
          <ProjectCard onClick={toggle} />
          <ProjectCard onClick={toggle} />
          <ProjectCard onClick={toggle} />
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Project