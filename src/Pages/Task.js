import React,{useEffect, useState} from 'react'
import SideBar from '../Components/SideBar'
// import '../Styles/Task.css'
import {BsSearch} from 'react-icons/bs';
import ProjectCard from '../Components/ProjectCard';
import TaskPopupComponent from '../Components/TaskPopupComponent';
// import { useDispatch} from "react-redux";
// import TaskAction from '../redux/actions/TaskAction';

const task=[{
  tid:1,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"completed",
  userid : "u1",
  projectid : "p1"
},
{
  tid:2,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email2",
  status :"inprogress",
  userid : "u2",
  projectid : "p1"
},
{
  tid:3,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email3",
  status :"completed",
  userid : "u3",
  projectid : "p1"
},
{
  tid:4,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"assigned",
  userid : "u1",
  projectid : "p1"
},{
  tid:1,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"completed",
  userid : "u1",
  projectid : "p1"
},
{
  tid:2,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email2",
  status :"inprogress",
  userid : "u2",
  projectid : "p1"
},
{
  tid:3,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email3",
  status :"completed",
  userid : "u3",
  projectid : "p1"
},
{
  tid:4,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"assigned",
  userid : "u1",
  projectid : "p1"
},{
  tid:1,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"completed",
  userid : "u1",
  projectid : "p1"
},
{
  tid:2,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email2",
  status :"inprogress",
  userid : "u2",
  projectid : "p1"
},
{
  tid:3,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email3",
  status :"completed",
  userid : "u3",
  projectid : "p1"
},
{
  tid:4,
  firstName:"ashim",
  lastName:"shrestha",
  email :"email1",
  status :"assigned",
  userid : "u1",
  projectid : "p1"
}
]


const Task = () => {

  useEffect(()=>{
    //  
  },[])

    
  const [status,setStatus]=useState("assigned")
  // const user=JSON.parse(localStorage.getItem('response')).user;
  // const id = user._id;


  // dispatch(TaskAction(id));
  
  const toggle=()=>{
    var blur = document.getElementById('blur');
    blur.classList.toggle('up');
    var popup = document.getElementById('popup');
    popup.classList.toggle('up');
  }
  return (
    <>
    <TaskPopupComponent onClick={toggle} />
    <div className='tempelate-div' id='blur'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <div className='selection-div'>
        <div className='button-div'>
            <button className='selection-button' style={{borderBottom:status==="assigned"&&"solid 3px",color:status==="assigned"&&"#002093"}} onClick={()=>{setStatus("assigned")}}>To-Do</button>
            <button className='selection-button' style={{borderBottom:status==="inprogress"&&"solid 3px",color:status==="inprogress"&&"#002093"}} onClick={()=>{setStatus("inprogress")}}>In Progress</button>
            <button className='selection-button' style={{borderBottom:status==="completed"&&"solid 3px",color:status==="completed"&&"#002093"}} onClick={()=>{setStatus("completed")}}>Completed</button>
          </div>            
        <from className='selection-div-form'>
          <input type="text" className='search' placeholder='search' />
          <button className='selection-button'>{<BsSearch />}</button>
        </from>
      </div>
       <div className='bottom-div'>
          {task.map((data)=>
            data.userid &&
                (data.status === status &&
                <ProjectCard name={data.tid} status={data.status} onClick={toggle} /> 
                )
            )}
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Task