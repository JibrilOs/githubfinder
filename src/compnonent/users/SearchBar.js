import React, {  useState, useContext } from "react";
import PropTypes from "prop-types";
import githubContext from "../../context/github/githubContext.jsx";
const SearchBar = ({ showClear, setAlert, clearUsers }) => {
  //comment
  const githubcontext = useContext(githubContext);
     
  const [text, setText] = useState({ text: "", email: "", date: "" });

  //comment

  //comment
  const handleChange = (event) => {
    // console.log(event.target.value, "value target");
    // console.log(event.target.name, "name target"); // console.log(event.target.value, "value target");
    // console.log(event.target.name, "name target");
    return setText({ [event.target.name]: event.target.value });
  };
  //comment
  const onSubmit = (event) => {
    event.preventDefault();

    if (text.text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubcontext.searchUsers(text.text);
      return setText({ text: "" });
    }
    // console.log(this.state.text);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          onChange={handleChange}
          value={text.text}
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
      {console.log(githubcontext)}
    </div>
  );
};
SearchBar.propTypes = {
   
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired,
  };
export default SearchBar;
