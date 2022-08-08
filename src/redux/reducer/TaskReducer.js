import { TASK } from "../container/constant";

const initState = {
  taskState: {},
};

const TaskReducer = (state = initState, action) => {
  var { type, payload } = action;
  switch (type) {
    case TASK:
      return { ...state, signUpState: payload };

    default:
      return state;
  }
};

export default TaskReducer;
