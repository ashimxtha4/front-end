import React from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name chaincha"),
  lastName: Yup.string().required("Last name khai?"),
  email: Yup.string()
    .email("Ramro email halna paryo sir")
    .required("Email chaincha hau"),
  password: Yup.string().required("Password halnu paryo"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().required("Password halnu paryo"),
  userName: Yup.string().required("Username pani chaincha"),
  designation: Yup.string().required("Euta designation choose garnuhos"),
  phoneNumber: Yup.string().required("Phone number k ho?"),
});

function SignUp() {
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    try {
      console.log(values, "yo signup values ho");
      // const abc = { email: values.email, password: values.password };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="image-div">
        <img src={Vector1} alt="effect" className="back-image" />
        <img src={Vector2} alt="effect" className="front-image" />
      </div>
      <div className="main-div">
        <h1 className="form-heading">Welcome to Asterdio</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userName: "",
            designation: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched, handleChange, handleSubmit }) => (
            <form className="signup-form">
              <input
                type="text"
                className="input"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange("firstName")}
              />
              {errors.firstName && touched.firstName ? (
                <div className="form-firstName-error-div">
                  {errors.firstName}
                </div>
              ) : null}
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange("lastName")}
              />
              {errors.lastName && touched.lastName ? (
                <div className="form-lastName-error-div">{errors.lastName}</div>
              ) : null}
              <input
                type="text"
                className="input"
                placeholder="Email"
                name="email"
                onChange={handleChange("email")}
              />
              {errors.email && touched.email ? (
                <div className="form-email-error-div">{errors.email}</div>
              ) : null}
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                onChange={handleChange("password")}
              />
              {errors.password && touched.password ? (
                <div className="form-password-error-div">{errors.password}</div>
              ) : null}
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange("confirmPassword")}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="form-confirmPassword-error-div">
                  {errors.confirmPassword}
                </div>
              ) : null}
              {/* <input
                type="text"
                className="input"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={handleChange("phoneNumber")}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="form-phoneNumber-error-div">
                  {errors.phoneNumber}
                </div>
              ) : null} */}
              <input
                list="browsers"
                name="browser"
                id="designatio"
                className="input"
                placeholder="Designation"
                onChange={handleChange("designation")}
              />
              {errors.designation && touched.designation ? (
                <div className="form-designation-error-div">
                  {errors.designation}
                </div>
              ) : null}
              <datalist id="browsers">
                <option value="Front-End Developer" />
                <option value="Back-End Developer" />
                <option value="QA Engineer" />
                <option value="Designer" />
                <option value="Finance" />
              </datalist>

              <input
                type="button"
                name="Log-In"
                value="Sign-Up"
                className="button"
                // onClick={() => {
                //   navigate("/");
                // }}
                onClick={handleSubmit}
              />
            </form>
          )}
        </Formik>
        <p>
          Already a User{" "}
          <Link exact to="/">
            Log In
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
