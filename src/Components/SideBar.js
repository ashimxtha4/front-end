import React, { useState } from 'react'
import '../App.css'
import Ellipse14 from "../Images/Ellipse14.svg"
import {motion} from "framer-motion";
import {BsFileEarmarkText,BsClipboardCheck,BsPerson} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa'
import {NavLink,Link} from 'react-router-dom';
import {MdOutlineDashboard} from 'react-icons/md';
import {TbLogout} from 'react-icons/tb';


const routes = [
  {
    path:"/dashboard",
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
    path:"/profile",
    name:"Profile",
    icon: <BsPerson />
  }
]

const SideBar=()=> {
  const [isOpen,setIsOpen] = useState(true) ;
  const user=JSON.parse(localStorage.getItem('response')).user;

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
        
        <div className='main-container'>
            <motion.div animate={{width: isOpen ? "18vw" : "45px"}} className="sidebar">
              <div className='top-section'>
                <div className='manage-bars'>
                {isOpen && <div className='heading'>
                  <h1 className='logo'>
                      TaskIt
                  </h1>
                  </div>}
                  
                  <div className='bars'>
                    <FaBars onClick={toggle}/>
                  </div>
                </div>
                {isOpen && <div className='profile'>
                    <img src= {Ellipse14} alt="profile_image" />
                    <h3>{user?.firstName}</h3>
                    <p>{user?.designation}</p>
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
              <div className='logout'>
                    <Link exact to='/' className='list'>
                    <div className='span'>
                    <div className='icons'>{<TbLogout />}</div>
                    {isOpen && <div className='link_text'>Log Out</div>}
                  </div>
                    </Link>
              </div>
            </motion.div> 
        </div>
      </>
  )
}

export default SideBar