import axios from "axios";
import { LOG_IN } from "../container/constant";

const LogInAction = (credentials) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:3000/user/login",
    credentials
  );
  console.log(response.data, "data");
  localStorage.setItem('response',JSON.stringify(response.data));
  dispatch({ type: LOG_IN, payload: response.data });
};

export default LogInAction;
