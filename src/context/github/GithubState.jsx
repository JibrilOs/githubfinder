import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  const [state, dispatch] = useReducer(initialState, GithubReducer);
  //Search Users
  //Get user
  //Get repos
  //Clear users
  //set loading
  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.null,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GithubState;
