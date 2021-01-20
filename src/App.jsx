import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./compnonent/layout/Navbar";
import Users from "./compnonent/users/Users";
import UserPage from "./compnonent/users/UserPage";

import SearchBar from './compnonent/users/SearchBar';
import Alert from "./compnonent/layout/Alert"
import About from "./compnonent/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
  //comment//comment github api authorization


  //comment//comment github api authorization


const App=()=> {
  //comment//comment

  

 
  

  
  return (
    <GithubState>
      <AlertState>
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
                        <SearchBar />
                        <Users />
                      </Fragment>
                    );
                  }}
                />
                <Route path="/about" exact component={About} />
                <Route exact path="/user/:login" component={UserPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}
App.contextType=GithubState

export default App;
  