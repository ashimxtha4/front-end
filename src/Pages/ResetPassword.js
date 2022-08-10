import React, { useEffect } from "react";
import "../Styles/ResetPassword.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  useEffect(() => {
    localStorage.removeItem("response");
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginState } = useSelector((state) => state.logIn);

  const resetPasswordSchema = Yup.object().shape({
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

  const handleResetPasswordSubmit = (values) => {
    const resetPasswordData = {
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    }

    console.log(resetPasswordData)
  };

  return (
    <>
      <div className="image-div">
        <img src={Vector1} alt="effect" className="back-image" />
        <img src={Vector2} alt="effect" className="front-image" />
      </div>
      <div className="main-div">
        <h1 className="form-heading">Reset Password</h1>
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={resetPasswordSchema}
            onSubmit={handleResetPasswordSubmit} // Call a function to store the input values on submit.
        >
          {({ errors, touched, handleChange, handleSubmit }) => (
            <form className="resetpassword-form">
              <div className="resetpassword-div">
                {/* <label for="newpassword-label">New Password</label> */}
                <input
                  type="password"
                  name="newPassword"
                  onChange={handleChange("newPassword")} // On input change, change the error message.
                  placeholder="Enter new password"
                  required
                />
                {errors.newPassword && touched.newPassword ? (
                  <div className="resetpassword-error-div">
                    {errors.newPassword}
                  </div>
                ) : null}
              </div>
              <div className="resetpassword-div">
                {/* <label for="confirmpassword-label">Confirm Password</label> */}
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange("confirmPassword")} // On input change, change the error message.
                  placeholder="Confirm password"
                  required
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="resetpassword-error-div">
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="resetpassword-button-div">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="resetpassword-button"
                >
                  Save
                </button>
              </div>

              <ToastContainer position="top-left" autoClose={6000} />
            </form>
          )}
        </Formik>
        <p className="reset-back-link">
          <Link exact to="/">
            Back to Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default ResetPassword;
