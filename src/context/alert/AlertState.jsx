import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  //**state**//
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //** this state hook helps me to storage and update the values of the alert based on what the current user input**//
  //!setAlert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    return setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
