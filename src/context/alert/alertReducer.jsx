import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, msg: action.payload.msg, type: action.payload.type };
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
export default AlertReducer;
