import { LOG_IN } from "../container/constant";

const initState = {
  loginState: {},
};

const LoginReducer = (state = initState, action) => {
  var { type, payload } = action;
  switch (type) {
    case LOG_IN:
      return { ...state, loginState: payload };

    default:
      return state;
  }
};

export default LoginReducer;
