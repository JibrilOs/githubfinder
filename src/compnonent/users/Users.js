import React, { useContext } from "react";
import UserItem from "./UserItem";
import githubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = () => {
  const githubcontext = useContext(githubContext);
  const users = githubcontext.users;
  const loading = githubcontext.loading;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyles}>
        {users.map((user, id) => {
          return <UserItem user={user} key={id} />;
        })}
      </div>
    );
  }
};
Users.propTypes = {};
const UserStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
