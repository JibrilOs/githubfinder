import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./compnonent/layout/Navbar";
import UserPage from "./compnonent/users/UserPage";

import Alert from "./compnonent/layout/Alert"
import Home from "./compnonent/pages/Home";

import About from "./compnonent/pages/About";
import NotFound from "./compnonent/pages/NotFound";
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
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route exact path="/user/:login" component={UserPage} />
                <Route exact component={NotFound} />{" "}
                {/**i didnt bring a path property to enable this component to render if the user types a wrong endpoint after the hompage route */}
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
  