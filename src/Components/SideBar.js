import React from 'react'
import '../App.css'
import {motion} from "framer-motion";
import {BsFileEarmarkText,BsFillCalendar2PlusFill,BsClipboardCheck,BsPerson} from 'react-icons/bs';
import {FiAlertCircle} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

const SideBar=({children})=> {
    const routes = [
      {
        path:"/",
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
  return (

        <div className='main-container'>
            <motion.div animate={{width:"200px"}} className="sidebar">
              <section className='routes'>
                {routes.map((route)=>(
                  <NavLink to={route.path} key={route.name} className="list">
                    <div className='icons'>{route.icon}</div>
                    <div className='link_text'>{route.name}</div>    
                  </NavLink>
                  
                ))}
              </section>    
            </motion.div>
            <main>
              {children}
            </main>
        </div>
  )
}

export default SideBar