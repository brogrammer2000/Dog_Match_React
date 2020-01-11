import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <navbar>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/match">
          <li>Find match</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </navbar>
  );
}

export default NavBar;
