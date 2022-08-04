import React, { useEffect } from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignUpAction from "../redux/actions/SignUpAction";
import { Formik } from "formik";
import * as Yup from "yup";
// import { SIGN_UP } from "../redux/container/constant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name chaincha"),
  // lastName: Yup.string().required("Last name khai?"),
  email: Yup.string()
    .email("Ramro email halna paryo sir")
    .required("Email chaincha hau"),
  password: Yup.string().required("Password halnu paryo"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required("Password pheri rakha la")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password mileko chaina"),
    }),
  userName: Yup.string().required("Username pani chaincha"),
  designation: Yup.string().required("Euta designation choose garnuhos"),
  // phoneNumber: Yup.string().required("Phone number k ho?"),
});

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signUpState } = useSelector((state) => state.signUp); // Empty payload ya bata airacha!

  // useEffect(() => {
  //   dispatch({ type: SIGN_UP, payload: "" });
  // }, []);

  const handleFormSubmit = (values) => {
    try {
      console.log(values, "Yo signup data ho.");
      const form_data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.userName,
        designation: values.designation,
        password: values.password,
      };
      // [
      //   { firstName: values.firstName },
      //   { lastName: values.lastName },
      //   { email: values.email },
      //   { user_name: values.userName },
      //   { designation: values.designation },
      //   { password: values.password },
      // ];

      dispatch(SignUpAction(form_data));
      console.log(signUpState, "Yo signupState console ho signup.js page ma.");

      setTimeout(async () => {
        const user = await JSON.parse(localStorage.getItem("response"));
        // console.log(user, "This is submitted user data.");
        if (user.success === true) {
          alert("User created successfully.");
          navigate("/");
        }
      }, 500);

      // if (signUpState.success) {
      //   alert("User created successfully.");
      //   navigate("/");
      //   // dispatch(SignUpAction("kill"));
      // }
      // !!signUpState.success ?
      //   (alert("User created successfully.") && navigate("/"))
      //   // dispatch(SignUpAction("kill"));
      //  : signUpState.status === "false"?
      //   (toast.error("This email is not available."))
    } catch (err) {
      console.log("Catching error if not able to signup.", err);
    }

    // try {
    //   console.log(values, "yo signup values ho");
    //   // const abc = { email: values.email, password: values.password };
    // } catch (err) {
    //   console.log(err);
    // }
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
              <div className="signup-input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange("firstName")}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="signup-error-div">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange("lastName")}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="signup-error-div">{errors.lastName}</div>
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange("email")}
                />
                {errors.email && touched.email ? (
                  <div className="signup-error-div">{errors.email}</div>
                ) : // : signUpState.status === "false" ? (<div className="signup-error-div">{signUpState.msg}</div>)
                null}
              </div>
              <div className="signup-input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  name="userName"
                  onChange={handleChange("userName")}
                />
                {errors.userName && touched.userName ? (
                  <div className="signup-error-div">{errors.userName}</div>
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange("password")}
                />
                {errors.password && touched.password ? (
                  <div className="signup-error-div">{errors.password}</div>
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange("confirmPassword")}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="signup-error-div">
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  list="browsers"
                  name="browser"
                  id="designatio"
                  className="input"
                  placeholder="Designation"
                  onChange={handleChange("designation")}
                />
                {errors.designation && touched.designation ? (
                  <div className="signup-error-div">{errors.designation}</div>
                ) : null}
              </div>
              <datalist id="browsers">
                <option value="Front-End Developer" />
                <option value="Back-End Developer" />
                <option value="QA Engineer" />
                <option value="Designer" />
                <option value="Finance" />
              </datalist>

              <button
                type="submit"
                value="Sign-Up"
                className="button"
                // onClick={() => {
                //   navigate("/");
                // }}
                onClick={handleSubmit}
              >
                Sign-Up
              </button>
              <ToastContainer position="top-left" autoClose={6000} />
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