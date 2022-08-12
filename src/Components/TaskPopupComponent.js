import React from 'react'
// import TeamMemberDetails from './TeamMemberDetails'
import '../Styles/TaskPopupComponent.css'
import profilepicsmall1 from "../Images/profilepicsmall1.png";
import profilepicsmall2 from "../Images/profilepicsmall2.png";
import {RiCalendar2Fill} from "react-icons/ri"

const TaskPopupComponent = (porps) => {
    return (
        <div className='task-popup-wrapper' id='popup'>
        <button className='task-popup-button' onClick={porps.onClick}>X</button>
        <div className='task-popup'>
            <h2>Task Description</h2>


            <div className='task-popup-inner'>
                <h3 className='task-popup-topic'>Task Topic</h3>
                <div className='task-date-div'>
                        <RiCalendar2Fill className='task-calendar' />
                        <h3 className='task-date-label'>Due Date:</h3>
                        <h3 className='task-date'> 26 July, 2022</h3>
                </div>

                <div className='task-description'>
                    <h3 className='task-popuph3'>Description</h3>
                    <p>
                        one 21 guns lay down ur arms give up the fight 
                        one 21 guns throw up ur arms into the sky
                    </p>
                </div>

                <div className='task-details'>
                    <h3 className='task-popuph3'>Assigned By :</h3>
                    <div className='task-assignment'><img src={profilepicsmall1} height="7%" width="7%" /><p>PM Name</p></div>
                </div>

                <div className='task-details'>
                    <h3 className='task-popuph3'>Assigned By :</h3>
                    <div className='task-assignment'><img src={profilepicsmall1} height="7%" width="7%" /><p>Employess Name</p></div>
                </div>

                <div className='task-details'>
                    <h3 className='task-popuph3'>Status</h3>
                    <select className='task-popup-status' name='task-status'>
                        <option value="assigned">Assigned</option>
                        <option value="inprogress">In-Progress</option>
                        <option value="completed">Completed</option>  
                    </select>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default TaskPopupComponent