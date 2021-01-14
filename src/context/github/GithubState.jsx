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

 //comment//comment github api authorization

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});
  //comment//comment github api authorization


const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Search Users
  //Github search users
  const searchUsers = async (text) => {
    setLoading();

    try {
      const res = await github.get(`/search/users?q=${text}`);
      // console.log(res.data);

      dispatch({ type: SEARCH_USERS, payload: res.data.items });
    } catch (err) {
      console.log(err, "errror type");
    }
  };
  //Search Users
  //Get user
  //Get repos
  //Clear users
  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.null,
        searchUsers,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GithubState;
