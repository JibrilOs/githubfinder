import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./compnonent/layout/Navbar";
import Users from "./compnonent/users/Users";
import UserPage from "./compnonent/users/UserPage";

import SearchBar from './compnonent/users/SearchBar';
import Alert from "./compnonent/layout/Alert"
import About from "./compnonent/pages/About";
  //comment//comment github api authorization

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});
  //comment//comment github api authorization


class App extends Component {
  //comment//comment

  //** state**//

  state = { users: [], user: {}, loading: false, alert: null };
  //** state**//

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   const fetcdata = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //       );
  //       // console.log(res.data);
  //       return this.setState({ users: res.data, loading: false });
  //     } catch (err) {
  //       console.log(err, "errror type");
  //     }
  //   };
  //   fetcdata();
  // }
  //comment//comment//comment
  //Github search users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    try {
      const res = await github.get(`/search/users?q=${text}`);
      // console.log(res.data);
      return this.setState({ users: res.data.items, loading: false });
    } catch (err) {
      console.log(err, "errror type");
    }
  };

  //GET SINGLE Github  user
  getUser = async (username) => {
    this.setState({ loading: true });

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);

      // console.log(res.data);
      return this.setState({ user: res.data, loading: false });
    } catch (err) {
      console.log(err, "errror type getting single user");
    }
  };
  //GET SINGLE Github  user

  //comment//comment//comment
  //** comment//comment//comment

  clearUsers = async () => {
    try {
      // const res = await axios.get(
      //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      // );
      // // console.log(res.data);
      // return this.setState({ users: res.data, loading: false });
      return this.setState({ users: [], loading: false });
    } catch (err) {
      console.log(err, "errror type");
    }
  };
  //** comment//comment//comment

  //!setAlert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    return setTimeout(() => {
      return this.setState({ alert: null });
    }, 1000);
  };

  render() {
    const { users, loading ,user} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => {
                  return (
                    <Fragment>
                      <SearchBar
                        searchUsers={this.searchUsers} 
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users users={users} loading={loading} />
                    </Fragment>
                  );
                }}
              />
              <Route path="/about" exact component={About} />
              <Route exact path="/user/:login"  render={(props)=>{
             return    <UserPage {...props} getUser={this.getUser} user={user} loading={loading} />


              }}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
  