import React from "react";
import PropTypes from "prop-types";
import ReposItem from "./ReposItem";

const Repos = ({ repos }) => {
  return (
    <div className="">
      <h1>Repos</h1>
      {repos.map((repo) => {
        return (
          <ul key={repo.id}>
            <ReposItem repo={repo} />
          </ul>
        );
      })}
    </div>
  );
};
Repos.propTypes = { repos: PropTypes.array.isRequired };

export default Repos;
