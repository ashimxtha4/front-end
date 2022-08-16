import React from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignUpAction from "../redux/actions/SignUpAction";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Incorrect email format")
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[a-z._-]{1,12}\.com$/,
      "Email pattern is not correct"
    ),
  password: Yup.string().required("Password is required"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required("Please confirm password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
  phoneNumber: Yup.string()
    .required("Please enter your phone number")
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Phone number is not valid"
    ),
  designation: Yup.string().required("Select one designation"),
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
        // username: values.userName,
        phoneNumber: values.phoneNumber,
        designation: values.designation,
        password: values.password,
      };

      dispatch(SignUpAction(form_data));
      console.log(signUpState, "Yo signupState console ho signup.js page ma.");

      setTimeout(async () => {
        const user = await JSON.parse(localStorage.getItem("response"));
        if (user.success === true) {
          navigate("/");
        }
      }, 200);
    } catch (err) {
      console.log("Catching error if not able to signup.", err);
    }
  };

  return (
    <div className="signup-main-div">
      <div className="image-div">
        <img src={Vector1} alt="effect" className="back-image" />
        <img src={Vector2} alt="effect" className="front-image" />
      </div>
      <div className="main-div">
        <h1 className="form-heading">Create an Account</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            // userName: "",
            phoneNumber: "",
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
                ) : null}
              </div>
              <div className="signup-input-div">
                <input
                  type="number"
                  className="input"
                  placeholder="Phone number"
                  name="phoneNumber"
                  onChange={handleChange("phoneNumber")}
                  // onkeypress="return /[0-9]/i.test(event.key)"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="signup-error-div">{errors.phoneNumber}</div>
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
                <select
                  name="designation"
                  id="designation"
                  onChange={handleChange("designation")}
                  required
                >
                  <option
                    value="Select Your Designation"
                    selected
                    hidden
                    disabled
                  >
                    Select Your Designation
                  </option>
                  <option value="Front-End Developer">
                    Front-End Developer
                  </option>
                  <option value="Back-End Developer">Back-End Developer</option>
                  <option value="Full-Stack Developer">
                    Full-Stack Developer
                  </option>
                  <option value="QA Engineer">QA Engineer</option>
                  <option value="Designer">Designer</option>
                  <option value="Finance">Finance</option>
                </select>
                {errors.designation && touched.designation ? (
                  <div className="signup-error-div">{errors.designation}</div>
                ) : null}
              </div>

              <button
                type="submit"
                value="Signup"
                className="button"
                onClick={handleSubmit}
              >
                Signup
              </button>
              <ToastContainer position="top-left" autoClose={6000} />
            </form>
          )}
        </Formik>
        <p className="login-form-register-link">
          Already a user?{" "}
          <Link exact to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
