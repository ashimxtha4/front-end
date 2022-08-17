import axios from "axios";
import { CHANGE_PASSWORD } from "../container/constant";

const ChangePasswordAction = (formData) => async (dispatch) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/password/update",
      formData
    );
    console.log(response.data, "Axios put response");
    await dispatch({ type: CHANGE_PASSWORD, payload: response.data });
  } catch(err) {
    console.log("Error updating password", err)
  }
};

export default ChangePasswordAction;
