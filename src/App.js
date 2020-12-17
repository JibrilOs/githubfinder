import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./compnonent/layout/Navbar";
import Users from "./compnonent/users/Users";
import SearchBar from './compnonent/users/SearchBar';
  //comment//comment github api authorization

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

class App extends Component {
  //comment//comment

    state={users:[],loading:false}
    componentDidMount(){
      this.setState({loading:true})
      const fetcdata=async()=>{
  try{

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    return this.setState({users:res.data,loading:false})
  }catch(err){
  console.log(err,"errror type")
  }

      }
      fetcdata();
    }
  //comment//comment//comment
//Github search users
  searchUsers= async(text)=>{
          this.setState({ loading: true });


try {
  const res = await github.get(`/search/users?q=${text}`);
  console.log(res.data);
  return this.setState({ users: res.data.items, loading: false });
} catch (err) {
  console.log(err, "errror type");
}

    
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchBar searchUsers={this.searchUsers} />

          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
  