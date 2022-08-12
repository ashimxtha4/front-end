import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import "../Styles/ChangePassword.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const ChangePassword = () => {
  const changePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("newPassword")],
          "Password doesn't match"
        ),
      }),
  });

  const [formState, setformState] = useState(false);

  const changeFormCSS = () => {
    let btnSaveClass = document.getElementById("password-save-btn");
    let btnCancelClass = document.getElementById("password-cancel-btn");

    formState === true
      ? (btnSaveClass.className = "password-save-btn-act") &&
        (btnCancelClass.className = "password-cancel-btn-act")
      : (btnSaveClass.className = "password-save-btn-inact") &&
        (btnCancelClass.className = "password-cancel-btn-inact");
  };

  useEffect(() => {
    changeFormCSS();
  });

  const handlePasswordChangeForm = (values) => {
    const passwordChangeData = {
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    console.log(passwordChangeData);
  };

  return (
    <div className="tempelate-div">
      <div className="side-div">
        <SideBar />
      </div>
      <div className="password-content-div">
        <div className="password-card-div">
          <div className="password-title-div">
            <Link exact to="/profile">
              <button type="button" className="password-title-btn">
                <BsArrowLeftCircle className="password-title-icon" />
              </button>
            </Link>
            <h3>Back</h3>
          </div>
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={changePasswordSchema}
            onSubmit={handlePasswordChangeForm}
          >
            {({ errors, touched, handleChange, handleSubmit }) => (
              <form className="password-card-form" action="" method="">
                <div className="changepassword-div">
                  <label for="currentPassword">Current Password</label>
                  <br></br>
                  <input
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    onChange={handleChange("currentPassword")}
                    onKeyDown={() => {
                      setformState(true);
                    }}
                    className="password-current-input"
                  />
                  {errors.currentPassword && touched.currentPassword ? (
                    <div className="changepassword-error-div">
                      {errors.currentPassword}
                    </div>
                  ) : null}
                </div>
                <div className="changepassword-div">
                  <label for="newPassword">New Password</label>
                  <br></br>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={handleChange("newPassword")}
                    onKeyDown={() => {
                      setformState(true);
                    }}
                    className="password-new-input"
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <div className="changepassword-error-div">
                      {errors.newPassword}
                    </div>
                  ) : null}
                </div>
                <div className="changepassword-div">
                  <label for="confirmPassword">Confirm Password</label>
                  <br></br>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={handleChange("confirmPassword")}
                    onKeyDown={() => {
                      setformState(true);
                    }}
                    className="password-confirm-input"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="changepassword-error-div">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div className="password-card-bot-div">
                  <button
                    type="submit"
                    className="password-save-btn-inact"
                    id="password-save-btn"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="password-cancel-btn-inact"
                    id="password-cancel-btn"
                    onClick={() => {
                      setformState(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>

                {/* <ToastContainer position="top-left" autoClose={6000} /> */}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
