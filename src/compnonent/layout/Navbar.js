import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  // comment we use static default props incase we dont pass the props to the component
  //comment we can also specify the type of props by using

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "GITHUB FINDER",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
