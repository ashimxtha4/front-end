import React, { useState } from 'react'
import '../App.css'
import Ellipse14 from "../Images/Ellipse14.svg"
import {motion} from "framer-motion";
import {BsFileEarmarkText,BsFillCalendar2PlusFill,BsClipboardCheck,BsPerson} from 'react-icons/bs';
import {FiAlertCircle} from 'react-icons/fi';
import {FaBars} from 'react-icons/fa'
import {NavLink} from 'react-router-dom';
import {MdOutlineDashboard} from 'react-icons/md';

const routes = [
  {
    path:"/",
    name:"Dashboard",
    icon:<MdOutlineDashboard/>
  },
  {
    path:"/Projects",
    name:"Projects",
    icon:<BsFileEarmarkText/>
  },
  {
    path:"/task",
    name:"Task",
    icon: <BsClipboardCheck />
  },
  {
    path:"/notice",
    name:"Notice",
    icon: <FiAlertCircle />
  },
  {
    path:"/events",
    name:"Events",
    icon: <BsFillCalendar2PlusFill />
  },
  {
    path:"/profile",
    name:"Profile",
    icon: <BsPerson />
  }
]

const SideBar=()=> {
  const [isOpen,setIsOpen] = useState(true) ;
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
        
        <div className='main-container'>
            <motion.div animate={{width: isOpen ? "247px" : "45px"}} className="sidebar">
              <div className='top-section'>
                <div className='manage-bars'><div className='bars'>
                  <FaBars onClick={toggle}/>
                </div></div>
                {isOpen && <div className='profile'>
                    <img src= {Ellipse14} alt="profile_image" />
                    <h3>NAME</h3>
                    <p>DESIGNATION</p>
                  </div> }
                  
              </div>
              


              <section className='routes'>
                {routes.map((route)=>(
                  <NavLink activeClassName="active" to={route.path} key={route.name} className="list">
                  <div className='span'>
                    <div className='icons'>{route.icon}</div>
                    {isOpen && <div className='link_text'>{route.name}</div>}
                  </div>   
                  </NavLink>
                  
                ))}
              </section>    
            </motion.div>
        </div>
      </>
  )
}

export default SideBar