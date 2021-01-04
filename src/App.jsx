import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./compnonent/layout/Navbar";
import Users from "./compnonent/users/Users";
import UserPage from "./compnonent/users/UserPage";

import SearchBar from './compnonent/users/SearchBar';
import Alert from "./compnonent/layout/Alert"
import About from "./compnonent/pages/About";
import GithubState from "./context/github/GithubState";
  //comment//comment github api authorization

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});
  //comment//comment github api authorization


const App=()=> {
  //comment//comment

  //** state**//

  const [users,setUsers] =useState ([]);
const [user,setUser] =useState ({})
const [repos,setRepos] =useState ([])
const [loading,setLoading] =useState (false)
const [alert,setAlert] =useState(null)
  //** state**//

  //comment//comment//comment
  //Github search users
 const searchUsers = async (text) => {
    setLoading(true );

    try {
      const res = await github.get(`/search/users?q=${text}`);
      // console.log(res.data);
       setUsers(res.data.items);
       setLoading( false );
    } catch (err) {
      console.log(err, "errror type");
    }
  };

  //GET SINGLE Github  user
 const getUser = async (username) => {
    setLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);

      // console.log(res.data);
     setUser(res.data);
          setLoading(false);

    } catch (err) {
      console.log(err, "errror type getting single user");
    }
  };
  //GET SINGLE Github  user

  //comment//comment//comment
  //** comment//comment//comment

  //Get user Repos

const  getUserRepos = async (username) => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=9&sort=created:asc`
      );

      //  console.log(res.data);
       setRepos( res.data );
          setLoading(false);

    } catch (err) {
      console.log(err, "errror type getting single user");
    }
  };
  //Get user Repos

  //** comment//comment//comment

  const clearUsers = async () => {
    try {
      // const res = await axios.get(
      //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      // );
      // // console.log(res.data);
      // return this.setState({ users: res.data, loading: false });
       setUsers( []);
      setLoading(false);

    } catch (err) {
      console.log(err, "errror type");
    }
  };
  //** comment//comment//comment

  //!setAlert
 const showAlert = (msg, type) => {
    setAlert({ msg:msg, type:type });
    return setTimeout(() => {
      return setAlert({ alert: null });
    }, 1000);
  };

    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => {
                    return (
                      <Fragment>
                        <SearchBar
                          searchUsers={searchUsers}
                          clearUsers={clearUsers}
                          showClear={users.length > 0 ? true : false}
                          setAlert={showAlert}
                        />
                        <Users users={users} loading={loading} />
                      </Fragment>
                    );
                  }}
                />
                <Route path="/about" exact component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => {
                    return (
                      <UserPage
                        {...props}
                        getUser={getUser}
                        user={user}
                        loading={loading}
                        getUserRepos={getUserRepos}
                        repos={repos}
                      />
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    );
  
}

export default App;
  