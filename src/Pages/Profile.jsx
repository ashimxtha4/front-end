import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'


const Profile = () => {
  return (
    <>
    <div className='tempelate-div'>
    <div className='side-div'>
      <SideBar />
    </div>
    <div className='content-div'>
      Profile
    </div>
    </div>
    </>
    
  )
}

export default Profile