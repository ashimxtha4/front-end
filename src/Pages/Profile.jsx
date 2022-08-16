import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import "../Styles/Profile.css";
import profilepicmd from "../Images/profilepicmedium.png";
import defaultprofilepic from "../Images/Taskit_Default.png";
import { Link } from "react-router-dom";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";

// const profileValidationSchema = Yup.object().shape({
//   phoneNumber: Yup.string()
//     .required()
//     .matches(
//       /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
//       "Phone number is not valid"
//     ),
//   firstName: Yup.string().required("First name can not be empty"),
//   lastName: Yup.string().required(),
// });

const Profile = () => {
  const localData = JSON.parse(localStorage.getItem("response")).user;

  const designationArray = [
    "Front-End Developer",
    "Back-End Developer",
    "QA Engineer",
    "Designer",
    "Finance",
  ];

  const [formChangeState, setformChange] = useState(false); // Empty string results in false.
  const [profileImage, setProfileImage] = useState("profilepicmd");
  const [post, setPost] = useState(localData.designation);
  const [updatedData, setUpdatedData] = useState({
    firstName: localData.firstName,
    lastName: localData.lastName,
    email: localData.email,
    password: localData.password,
    phoneNumber: localData.phoneNumber,
  });

  const removeProfileImage = () => {
    setProfileImage("defaultprofilepic");
  };

  useEffect(() => {
    formChange();
    console.log(updatedData, "this is updatedData state");
  });

  const formChange = () => {
    let btnSaveClass = document.getElementById("bot-save-btn");
    let btnCancelClass = document.getElementById("bot-cancel-btn");

    formChangeState === true
      ? (btnSaveClass.className = "bot-save-btn-act") &&
        (btnCancelClass.className = "bot-cancel-btn-act")
      : (btnSaveClass.className = "bot-save-btn-inact") &&
        (btnCancelClass.className = "bot-cancel-btn-inact");
  };

  const handleOnSave = () => {
    console.log(post, "this is post state");
    const submitData = {
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      phoneNumber: updatedData.phoneNumber,
      designation: post,
    };
    console.log(submitData, "this is submitData state");
    alert("nice");
  };

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
                  {profileImage === "profilepicmd" ? (
                    <img src={profilepicmd} alt="userprofilepic" />
                  ) : profileImage === "defaultprofilepic" ? (
                    <img src={defaultprofilepic} alt="userprofilepic" />
                  ) : null}
                </div>
                <div className="profile-top-text">
                  <div className="profile-top-text-btn-change">
                    <button>Change</button>
                  </div>
                  <div className="profile-top-text-btn-remove">
                    <button
                      onClick={() => {
                        removeProfileImage(setformChange(true));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {/* <Formik
                initialValues={{
                  firstName: localData.firstName,
                  lastName: localData.lastName,
                  phoneNumber: localData.password,
                }}
                validationSchema={profileValidationSchema}
              > */}
              {/* {({ errors, touched, handleChange, handleSubmit }) => ( */}
              <form className="profile-card-mid-form" action="" method="">
                <div className="profile-card-form">
                  <div className="profile-mid-left-div">
                    <div className="profile-mid-input-div">
                      <label for="firstName">First Name</label>
                      <br></br>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={updatedData.firstName}
                        onChange={(e) => {
                          setUpdatedData((prevState) => ({
                            ...prevState,
                            firstName: e.target.value,
                          }));
                          // handleChange("firstName");
                        }}
                        onKeyDown={() => {
                          setformChange(true);
                        }}
                        required
                      />
                      {/* {errors.firstName && touched.firstName ? (
                            <div className="signup-error-div">
                              {errors.firstName}
                            </div>
                          ) : null} */}
                    </div>
                    <div className="profile-mid-input-div">
                      <label for="emailAddress">Email Address</label>
                      <br></br>
                      <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        value={updatedData.email}
                        disabled
                      ></input>
                    </div>
                    <div className="profile-mid-input-div">
                      <label for="phoneNumber">Phone Number</label>
                      <br></br>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        autoComplete="off"
                        value={updatedData.phoneNumber}
                        onKeyDown={() => {
                          setformChange(true);
                        }}
                        onChange={(e) => {
                          setUpdatedData((prevState) => ({
                            ...prevState,
                            phoneNumber: e.target.value,
                          }));
                        }}
                        pattern="[1-9]{1}[0-9]{9}"
                        onkeypress="return /[0-9]/i.test(event.key)"
                        required
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
                        id="lastName"
                        value={updatedData.lastName}
                        onKeyDown={() => {
                          setformChange(true);
                        }}
                        onChange={(e) => {
                          setUpdatedData((prevState) => ({
                            ...prevState,
                            lastName: e.target.value,
                          }));
                        }}
                        required
                      />
                    </div>
                    <div className="profile-mid-input-div">
                      <label for="password">Password</label>
                      <Link
                        exact
                        to="/profile/changepassword"
                        className="password-change-link"
                      >
                        Change
                      </Link>
                      <br></br>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={updatedData.password}
                        onKeyDown={() => {
                          setformChange(true);
                        }}
                        disabled
                      ></input>
                    </div>
                    <div className="profile-mid-input-div">
                      <label for="designation">Designation</label>
                      <br></br>
                      <select
                        name="designation"
                        id="designation"
                        onChange={(e) => {
                          setPost(e.target.value);
                          setformChange(true);
                        }}
                        required
                      >
                        <option selected>{post}</option>
                        {designationArray.map(
                          (items) =>
                            items !== post && (
                              <option value={items}>{items}</option>
                            )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="profile-card-bot-div">
                  <button
                    type="submit"
                    className="bot-save-btn-inact"
                    id="bot-save-btn"
                    // onClick={handleSubmit}
                    onClick={handleOnSave}
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    // value="reset"
                    className="bot-cancel-btn-inact"
                    id="bot-cancel-btn"
                    onClick={() => {
                      setformChange(false);
                      setPost(localData.designation);
                      setProfileImage("profilepicmd");
                      setUpdatedData({
                        firstName: localData.firstName,
                        lastName: localData.lastName,
                        phoneNumber: localData.phoneNumber,
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {/* )}
              </Formik> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
