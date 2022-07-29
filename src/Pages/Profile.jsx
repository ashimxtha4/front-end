import React from "react";
import SideBar from "../Components/SideBar";
import "./Tempelate.css";
import "../Styles/Profile.css";
import profilepicmd from "../Images/profilepicmedium.png";

const Profile = () => {
  /* const formChange = () => {
    let btnSaveClass = document.getElementById("bot-save-btn")
    let btnCancelClass = document.getElementById("bot-cancel-btn")

    btnSaveClass.classList.replace("bot-save-btn-act")
    btnCancelClass.classList.replace("bot-cancel-btn-act")
  } */

  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <SideBar />
        </div>
        <div className="content-div">
          <div className="profile-main-div">
            <div className="profile-card-div">
              <div className="profile-card-top-div">
                <div className="profile-top-img">
                  <img src={profilepicmd} alt="userprofilepic" />
                </div>
                <div className="profile-top-text">
                  <div className="profile-top-text-btn-change">
                    <button>Change</button>
                  </div>
                  <div className="profile-top-text-btn-remove">
                    <button>Remove</button>
                  </div>
                </div>
              </div>
              <form className="profile-card-mid-form" action="" method="">
                <div className="profile-mid-left-div">
                  <div className="profile-mid-input-div">
                    <label for="firstName">First Name</label>
                    <br></br>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Yubin"
                    ></input>
                  </div>
                  <div className="profile-mid-input-div">
                    <label for="emailAddress">Email Address</label>
                    <br></br>
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="previous@mail.com"
                      disabled
                    ></input>
                  </div>
                  <div className="profile-mid-input-div">
                    <label for="phoneNumber">Phone Number</label>
                    <br></br>
                    <input
                      type="number"
                      name="phoneNumber"
                      autoComplete="off"
                      placeholder="9808584035"
                      pattern="[1-9]{1}[0-9]{9}"
                      onkeypress="return /[0-9]/i.test(event.key)"
                    ></input>
                  </div>
                </div>
                <div className="profile-mid-right-div">
                  <div className="profile-mid-input-div">
                    <label for="lastName">Last Name</label>
                    <br></br>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Karki"
                    ></input>
                  </div>
                  <div className="profile-mid-input-div">
                    <label for="password">Password</label>
                    <br></br>
                    <input
                      type="password"
                      name="password"
                      placeholder="nice"
                    ></input>
                  </div>
                  <div className="profile-mid-input-div">
                    <label for="designation">Designation</label>
                    <br></br>
                    <select name="designation">
                      <option value="Select Designation" selected disabled>
                        Select Designation
                      </option>
                      <option value="Front-End Developer">
                        Front-End Developer
                      </option>
                      <option value="Back-End Developer">
                        Back-End Developer
                      </option>
                      <option value="QA Engineer">QA Engineer</option>
                      <option value="Designer">Designer</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="profile-card-bot-div">
                <button className="bot-save-btn-act">Edit</button>
                <button className="bot-cancel-btn-act">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
