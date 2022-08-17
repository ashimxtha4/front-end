import axios from "axios";
import { CHANGE_PASSWORD } from "../container/constant";
import { toast } from "react-toastify";

const ChangePasswordAction = (formData) => async (dispatch) => {
  // const token = await JSON.parse(localStorage.getItem("response"));
  try {
    const response = await axios.put(
      "http://localhost:3000/user/password/update",
      formData
    );
    console.log(response.data, "Axios put response");
    await dispatch({ type: CHANGE_PASSWORD, payload: response.data });
  } catch (err) {
    console.log("Error updating password", err);
    await dispatch({ type: CHANGE_PASSWORD, payload: err.response.data });

    if (err.response.data.msg === "Old password is incorrect") {
      toast.error("Invalid current password");
    } else if (
      err.response.data.msg === "Password donot match with each other"
    ) {
      toast.error("Old and new password do not match");
    }
  }
};

export default ChangePasswordAction;
