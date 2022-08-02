import axios from "axios";
import { LOG_IN } from "../container/constant";

const LogInAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://192.168.0.155:3000/user/login",
      credentials
    );
    console.log(response.data, "Yo axios post ko response data ho.");
    await dispatch({ type: LOG_IN, payload: response.data });
    localStorage.setItem("response", JSON.stringify(response.data));
  } catch (error) {
    console.log("LoginAction ko error ->", error.response.data.msg);
    dispatch({ type: LOG_IN, payload: error.response.data });
  }
};

export default LogInAction;
