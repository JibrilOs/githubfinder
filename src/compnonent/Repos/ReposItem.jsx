import React from "react";
import PropTypes from "prop-types";

function ReposItem({ repo }) {
  return (
    <div className="card">
      <li>
        <a href={repo.html_url}>{repo.name}</a>
      </li>
    </div>
  );
}
ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
