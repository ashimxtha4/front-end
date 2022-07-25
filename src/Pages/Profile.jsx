import React from 'react'
import SideBar from '../Components/SideBar'
import './Tempelate.css'
import "../Styles/Profile.css";
import profilepicmd from "../Images/profilepicmedium.png"


const Profile = () => {
  return (
    <>
    <div className='tempelate-div'>
      <div className='side-div'>
        <SideBar />
      </div>
      <div className='content-div'>
        <div className="profile-main-div">
        <div className="profile-card-div">
          <div className="profile-card-top-div">
            <div className="profile-top-img">
              <img src={profilepicmd} alt="" className="pofile-img"></img>
            </div>
          </div>
          <form className="profile-card-mid-form" action="" method="">
            <div className="profile-mid-left-div">
              <div className="profile-mid-input-div">
                <label for="firstName">First Name</label><br></br>
                <input type="text" name="firstName"></input>
              </div>
              <div className="profile-mid-input-div">
                <label for="emailAddress">Email Address</label><br></br>
                <input type="email" name="emailAddress" placeholder="previous@mail.com" disabled></input>
              </div>
              <div className="profile-mid-input-div">
                <label for="phoneNumber">Phone Number</label><br></br>
                <input type="text" name="phoneNumber"></input>
              </div>
            </div>
            <div className="profile-mid-right-div">
              <div className="profile-mid-input-div">
                <label for="lastName">Last Name</label><br></br>
                <input type="text" name="firstName"></input>
              </div>
              <div className="profile-mid-input-div">
                <label for="password">Password</label><br></br>
                <input type="password" name="password"></input>
              </div>
              <div className="profile-mid-input-div">
                <label for="role">Role</label><br></br>
                <input type="text" name="role"></input>
              </div>
            </div>
          </form>
          <div className="profile-card-bot-div">
            <button className="bot-save-btn">Save</button>
            <button className="bot-cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
    
  )
}

export default Profile