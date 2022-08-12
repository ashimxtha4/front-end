import axios from "axios";
import { SIGN_UP } from "../container/constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingUpAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/register",
      credentials
    );
    console.log(response.data, "Data from axios post request.");
    await dispatch({ type: SIGN_UP, payload: response.data });
    localStorage.setItem("response", JSON.stringify(response.data));
  } catch (err) {
    console.log("Yo signupaction ko catch error ho.", err.response.data.msg);
    // console.log(err.response.data);
    await dispatch({ type: SIGN_UP, payload: err.response.data });

    if (err.response.data.status === "false") {
      toast.error(err.response.data.msg);
    }
  }
};

export default SingUpAction;