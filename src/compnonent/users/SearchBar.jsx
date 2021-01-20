import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext.jsx";
import AlertContext from "../../context/alert/AlertContext";
const SearchBar = () => {
  //comment
  const githubcontext = useContext(githubContext);
  const alertContext = useContext(AlertContext);
  const  { users, clearUsers  }  =  githubcontext;;
  const { setAlert } = alertContext;

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
const showClear = users.length > 0; 
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
    </div>
  );
};
export default SearchBar;
