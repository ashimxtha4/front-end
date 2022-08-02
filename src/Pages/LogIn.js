import React from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import LogInAction from "../redux/actions/LogInAction";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

<<<<<<< HEAD
const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email thik chaina hai")
    .required("Email chaincha hau"),
  password: Yup.string().required("Password halnu paryo"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const LogIn = () => { 
=======
const LogIn = () => {
  // let { error_msg } = useSelector((state) => state.logIn);
  // console.log(error_msg);

>>>>>>> 4800837cf0011f328f6537a495ac9feeeb584f15
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const user=JSON.parse(localStorage.getItem('response'));
  console.log(user.success);


  const handleFormSubmit = (values) => {
    try {
<<<<<<< HEAD
      console.log(values, "yo values ho");
      const credentials = { email: values.email, password: values.password };
      dispatch(LogInAction(credentials));
      if (user.success) navigate("/dashboard");
=======
      console.log(values, "Yo form submit garda ko values ho.");
      const abc = { email: values.email, password: values.password };
      dispatch(LogInAction(abc));
      console.log(loginState, "Yo loginState console ho login.js page ma.");
      if (loginState.user) navigate("/dashboard");
>>>>>>> 4800837cf0011f328f6537a495ac9feeeb584f15
    } catch (err) {
      console.log("Catching error if not able to login.", err);
    }
  };

  const LogInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email thik chaina hai")
      .required("Email chaincha"),
    password: Yup.string().required("Password halnu paryo"), // .min(8, "Too short.").matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

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
              <a className="forget-pass" href="ForgerPassword.js">
                Forget your password ?
              </a>
              <button
                type="button"
                value="Log-In"
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
