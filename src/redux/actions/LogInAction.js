import axios from "axios";
import { LOG_IN } from "../container/constant";

const LogInAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      credentials
    );
    
    console.log(response.data, "Yo axios post ko response data ho.");
    localStorage.setItem('response',JSON.stringify(response.data));
    dispatch({ type: LOG_IN, payload: response.data });
  } catch (error) {
    console.log(error.response.data.msg);
    dispatch({ type: LOG_IN, payload: error.response.data.msg });
  }
};

export default LogInAction;
