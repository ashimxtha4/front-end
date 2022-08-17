import React, { useEffect } from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogInAction from "../redux/actions/LogInAction";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForgotPasswordForm from "../Components/LoginForgotPasswordForm";

const LogIn = () => {
  useEffect(() => {
    // localStorage.removeItem("response");
    const checkLogin = async () => {
      const user = await JSON.parse(localStorage.getItem("response"));
      if (user) {
        navigate("/dashboard");
      }
    };
    checkLogin()
  }, []);
  // let { error_msg } = useSelector((state) => state.logIn);
  // console.log(error_msg);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginState } = useSelector((state) => state.logIn);
  // const user = JSON.parse(localStorage.getItem("response"));

  const handleFormSubmit = (values) => {
    try {
      console.log(values, "Yo form submit garda ko values ho.");
      const form_data = { email: values.email, password: values.password };
      dispatch(LogInAction(form_data));

      console.log(loginState, "Yo loginState console ho login.js page ma.");

      setTimeout(async () => {
        const user = await JSON.parse(localStorage.getItem("response"));
        if (user.success) {
          navigate("/dashboard");
        }
      }, 500);
    } catch (err) {
      console.log("Catching error if not able to login.", err);
    }
  };

  const LogInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Not a valid email")
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[a-z._-]{1,12}\.com$/,
        "Email pattern is not correct"
      ),
    password: Yup.string().required("Password is required"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
  });

  return (
    <>
      <div className="image-div">
        <img src={Vector1} alt="effect" className="back-image" />
        <img src={Vector2} alt="effect" className="front-image" />
      </div>
      <div className="main-div">
        <h1 className="form-heading">Welcome to Taskit</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LogInSchema}
          onSubmit={handleFormSubmit} // Call a function to store the input values on submit.
        >
          {({ errors, touched, handleChange, handleSubmit }) => (
            <form className="login-form">
              <div className="form-email-div">
                <input
                  name="email"
                  type="text"
                  className="input"
                  placeholder="Email"
                  // value={email}
                  onChange={handleChange("email")} // handle input change
                />
                {errors.email && touched.email ? (
                  <div className="form-email-error-div">{errors.email}</div>
                ) : // : loginState.status === false ? (
                //   <div className="form-email-error-div">{loginState.msg}</div>
                // )
                null}
                {/* <ErrorMessage name="email" /> */}
              </div>
              <div className="form-password-div">
                <input
                  type="password"
                  name="password"
                  className="input"
                  // value={pwd}
                  onChange={handleChange("password")} // On input change, change the error message.
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="form-password-error-div">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              {/* <button className="forget-pass" onClick={<FormDialog/>}>Forgot your password?</button> */}
              <LoginForgotPasswordForm />
              <button
                type="button"
                value="Log-In"
                className="button"
                onClick={handleSubmit}
              >
                Login
              </button>
              <ToastContainer position="top-left" autoClose={6000} />
            </form>
          )}
        </Formik>
        <p className="login-form-register-link">
          Don't have an account yet?{" "}
          <Link exact to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
