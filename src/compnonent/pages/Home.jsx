import React, { Fragment } from "react";
import SearchBar from "../users/SearchBar";
import Users from "../users/Users";

function Home(props) {
  return (
    <Fragment>
      <SearchBar />
      <Users />
    </Fragment>
  );
}

export default Home;
