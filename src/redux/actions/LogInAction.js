import axios from "axios";
import { LOG_IN } from "../container/constant";

const LogInAction = (abc) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://192.168.0.155:3000/user/login",
      abc
    );
    console.log(response.data, "data");
    dispatch({ type: LOG_IN, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export default LogInAction;
