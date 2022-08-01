import React from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogInAction from "../redux/actions/LogInAction";
import { Formik } from "formik";
import * as Yup from "yup";

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email thik chaina hai")
    .required("Email chaincha hau"),
  password: Yup.string().required("Password halnu paryo"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const LogIn = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const { loginState } = useSelector((state) => state.logIn);

  const handleFormSubmit = (values) => {
    try {
      console.log(values, "yo values ho");
      const abc = { email: values.email, password: values.password };
      dispatch(LogInAction(abc));
      console.log(loginState, "yo loginState console ho");
      if (loginState.user) navigate("/dashboard");
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
                  placeholder="Username/Email"
                  // value={email}
                  onChange={handleChange("email")} // handle input change
                />
                {errors.email && touched.email ? (
                  <div className="form-email-error-div">{errors.email}</div>
                ) : null}
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
              <a className="forget-pass" href="ForgerPassword.js">
                Forget your password ?
              </a>
              <button
                type="button"
                value=""
                className="button"
                onClick={handleSubmit}
                // onClick={() => {
                //   handleSubmit();
                // }}
              >
                Log-In
              </button>
            </form>
          )}
        </Formik>
        <p>
          Register if you are new{" "}
          <Link exact to="/signup">
            Sign Up?
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
