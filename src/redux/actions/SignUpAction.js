import axios from "axios";
import { SIGN_UP } from "../container/constant";

const SingUpAction = (abc) => async (dispatch) => {
  try {
    const response = await axios.post("localhost:3000/user/register", abc);
    console.log(response.data, "Yo post req to response data ho.");
    dispatch({ type: SIGN_UP, payload: response.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: SIGN_UP, payload: err.response.data.msg });
  }
};

export default SingUpAction;
