import axios from "axios";
import { toast } from "react-toastify";
import { LOG_IN } from "../container/constant";

const LogInAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      credentials
    );
    console.log(response.data, "Yo axios post ko response data ho.");
    await dispatch({ type: LOG_IN, payload: response.data });
    localStorage.setItem("response", JSON.stringify(response.data));
    const user = localStorage.getItem("response");
    console.log("User from local storage - ", user);
  } catch (error) {
    console.log("LoginAction ko error ->", error.response.data.msg);
    await dispatch({ type: LOG_IN, payload: error.response.data });

    if (error.response.data.msg === "password is incorrect") {
      toast.error("Incorrect password");
    } else if (error.response.data.msg === "email not valid") {
      toast.error("Not a valid email");
    }
  }
};

export default LogInAction;
