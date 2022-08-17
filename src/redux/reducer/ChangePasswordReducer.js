/* eslint-disable import/no-anonymous-default-export */
import { CHANGE_PASSWORD } from "../container/constant";

const initState = {
  changePasswordState: {},
};

export default (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordState: payload,
      };

    default:
      return state;
  }
};
