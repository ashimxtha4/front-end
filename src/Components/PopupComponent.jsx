import React from 'react'
import TeamMemberDetails from './TeamMemberDetails'
import '../Styles/PopupComponent.css'
import profilepicsmall1 from "../Images/profilepicsmall1.png";
import profilepicsmall2 from "../Images/profilepicsmall2.png";
import {RiCalendar2Fill} from "react-icons/ri"

const PopupComponent = (porps) => {
    return (
        <div className='popup-wrapper' id='popup'>
        <button className='popup-button' onClick={porps.onClick}><b>X</b></button>
        <div className='popup'>
            <div className='popup-inner'>
                <h3 className='popup-topic'>Project Topic</h3>
                <div className='top-div'>
                    <div className='date-div'>
                        <RiCalendar2Fill className='calendar' />
                        <h3 className='date-label'>Due Date:</h3>
                        <h3 className='popuph3' style={{color:"#646464",height:"fit-content"}}> 26 July, 2022</h3>
                    </div>
                    <div className='status-div'>
                        <h3 className='popup-status-label'>Status : </h3>
                        <p className='popup-status'>Complete</p>
                    </div>
                </div>
                <div>
                    <h3 className='popuph3'>Description</h3>
                    <p>
                        one 21 guns lay down ur arms give up the fight 
                        one 21 guns throw up ur arms into the sky
                    </p>
                </div>
                <h3 className='popuph3'>Members</h3>
                <div className='popup-very-inner'>
                <TeamMemberDetails memberpic={profilepicsmall1} membername="Nice Name" memberposition="UI/UX Designer"/>
                <TeamMemberDetails memberpic={profilepicsmall2} membername="Kurosaki Ichigo" memberposition="Web Developer"/>
                <TeamMemberDetails memberpic={profilepicsmall1} membername="Nice Name" memberposition="UI/UX Designer"/>
                <TeamMemberDetails memberpic={profilepicsmall2} membername="Kurosaki Ichigo" memberposition="Web Developer"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PopupComponent