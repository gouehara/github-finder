import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-jp">
      <h1>
        {" "}
        <FontAwesomeIcon icon={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">ホーム</Link>
          <Link to="/about">詳細</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github 利用者",
  icon: ["fab", "github"],
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.array.isRequired,
};

export default Navbar;
