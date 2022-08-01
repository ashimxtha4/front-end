import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import "./Tempelate.css";
import "../Styles/Profile.css";
import profilepicmd from "../Images/profilepicmedium.png";

const userData = [
  {
    firstName: "First",
    lastName: "Last",
    email: "email@email.com",
    password: "password",
    phone: 8888888,
    designation: "Front-End Developer",
  },
  {
    firstName: "First",
    lastName: "Last",
    email: "email@email.com",
    password: "password",
    phone: 8888888,
    designation: "Front-End Developer",
  },
  {
    firstName: "First",
    lastName: "Last",
    email: "email@email.com",
    password: "password",
    phone: 8888888,
    designation: "Front-End Developer",
  },
];

const Profile = () => {
  // const [formChangeState, setformChange] = useState(""); // Empty string results in false.
  const [formChangeState, setformChange] = useState(false); // Empty string results in false.

  console.log(formChangeState);
  const formChange = () => {
    let btnSaveClass = document.getElementById("bot-save-btn");
    let btnCancelClass = document.getElementById("bot-cancel-btn");

    // !!formChangeState
    // formChangeState.length >= 0
    formChangeState === true
      ? (btnSaveClass.className = "bot-save-btn-act") &&
        (btnCancelClass.className = "bot-cancel-btn-act")
      : (btnSaveClass.className = "bot-save-btn-inact") &&
        (btnCancelClass.className = "bot-cancel-btn-inact");
  };

  /* useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input]); */

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
                      id="firstName"
                      value={userData[0].firstName}
                      // onChange={(e) => {
                      //   setformChange(e.target.value);
                      //   formChange();
                      // }}
                      onKeyDown={() => {
                        setformChange(true);
                        formChange();
                      }}
                    >
                      {/* {userData[0].firstName} */}
                    </input>
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
                      name="lastName"
                      onKeyDown={() => {
                        setformChange(true);
                        formChange();
                      }}
                    ></input>
                  </div>
                  <div className="profile-mid-input-div">
                    <label for="password">Password</label>
                    <br></br>
                    <input type="password" name="password"></input>
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
                <button className="bot-save-btn-inact" id="bot-save-btn">
                  Save
                </button>
                <button
                  className="bot-cancel-btn-inact"
                  id="bot-cancel-btn"
                  onClick={() => {
                    setformChange("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
