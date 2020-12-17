import React, { Component } from "react";

class SearchBar extends Component {
  //comment
  state = { text: "", email: "", date: "" };
  //comment

  //comment
  handleChange = (event) => {
    // console.log(event.target.value, "value target");
    // console.log(event.target.name, "name target"); // console.log(event.target.value, "value target");
    // console.log(event.target.name, "name target");
    return this.setState({ [event.target.name]: event.target.value });
  };
  //comment
  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    return this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
