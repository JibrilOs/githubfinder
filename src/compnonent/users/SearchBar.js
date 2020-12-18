import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  //comment
  state = { text: "", email: "", date: "" };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired,
  };
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

    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      return this.setState({ text: "" });
    }
    // console.log(this.state.text);
  };;

  render() {
    const { clearUsers, showClear } = this.props;
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
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
        {console.log(showClear)}
      </div>
    );
  }
}

export default SearchBar;
