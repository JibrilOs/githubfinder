import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
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
  //comment//comment//comment

  //GET SINGLE Github  user
  const getUser = async (username) => {
    setLoading();

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);

      // console.log(res.data);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      console.log(err, "errror type getting single user");
    }
  };
  //GET SINGLE Github  user
  //Get user
  //comment//comment//comment

  //Get repos
  //Get user Repos

  const getUserRepos = async (username) => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=9&sort=created:asc`
      );

      //  console.log(res.data);
      
      dispatch({type:GET_REPOS,payload:res.data})
     
    } catch (err) {
      console.log(err, "errror type getting single user");
    }
  };
  //Get user Repos

  //** comment//comment//comment

  //Clear users
  const clearUsers = () => {
    // return this.setState({ users: res.data, loading: false });
    dispatch({ type: CLEAR_USERS, payload: [] });
  };
  //** comment//comment//comment
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
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};;;
export default GithubState;
