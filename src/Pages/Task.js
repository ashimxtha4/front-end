import React,{useEffect, useState} from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'
import {BsSearch} from 'react-icons/bs';
import ProjectCard from '../Components/ProjectCard';
import PopupComponent from '../Components/PopupComponent';
import { useDispatch} from "react-redux";
import TaskAction from '../redux/actions/TaskAction';

const task=[{
  _id:1,
  firstName:"ashim",
  lastName:"shrestha",
  
}]


const Task = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(TaskAction())
    },[])
  const [status,setStatus]=useState("To-Do")
  const user=JSON.parse(localStorage.getItem('response')).user;
  
  const id = user._id;
  // dispatch(TaskAction(id));
  
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
              <span><button className='selection-button' onClick={()=>{setStatus("todo")}}>To-Do</button></span>
              <span><button className='selection-button'onClick={()=>{setStatus("inprogress")}}>In Progress</button></span>
              <span><button className='selection-button'onClick={()=>{setStatus("completed")}}>Completed</button></span>
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
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Task