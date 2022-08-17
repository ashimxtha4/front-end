import React, { useState } from 'react'
import '../../Styles/SideBar.css'
import Ellipse14 from "../../Images/Ellipse14.svg"
import {motion} from "framer-motion";
import {BsFileEarmarkText,BsPerson} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa'
import {NavLink,Link} from 'react-router-dom';
import {MdOutlineDashboard} from 'react-icons/md';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {TbLogout} from 'react-icons/tb';
import cil_task from "../../Images/cil_task.svg"

const routes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    path: "/admin/project",
    name: "Projects",
    icon: <BsFileEarmarkText />,
  },
  {
    path: "/admin/employee",
    name: "Employee",
    icon: <HiOutlineUserGroup />,
  },
  // {
  //   path: "/",
  //   name: "Log Out",
  //   icon: <TbLogout />,
  // },
];

const AdminSidebar=()=> {
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
                     <img src={cil_task} /> TaskIt
                  </h1>
                  </div>}
                  
                  <div className='bars'>
                    <FaBars onClick={toggle}/>
                  </div>
                </div>
                {isOpen && <div className='profile'>
                    <img src= {Ellipse14} alt="profile_image" />
                    <div className='profile-details'>
                      <h3><b>{user?.firstName} {user?.lastName}</b></h3>
                      <p>{user?.designation}</p>
                      </div>
                  </div> }
              </div>
              


              <section className='routes'>
                {routes.map((route)=>(
                  <NavLink activeClassName="active" to={route.path} key={route.name} className="list">
                    <div className='icons'>{route.icon}</div>
                    {isOpen && <div className='link_text'>{route.name}</div>} 
                  </NavLink>                  
                ))}
                <Link exact to='/' className='list' onClick={()=>localStorage.removeItem("response")}>
                  <div className='icons'>{<TbLogout />}</div>
                  {isOpen && <div className='link_text'>Log Out</div>}
                  </Link>
              </section>    
              {/* <div className='logout'>
                    <Link exact to='/' className='list'>
                    <div className='icons'>{<TbLogout />}</div>
                    {isOpen && <div className='link_text'>Log Out</div>}
                    </Link>
              </div> */}
            </motion.div> 
        </div>
      </>
  )
}

export default AdminSidebar