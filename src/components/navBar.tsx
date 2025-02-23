import React from "react";
import { Link } from "react-router";

function NavBar() {
  return (
    <div className="bg-amber-400 p-5">
      <ul className="flex gap-5">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/page1">page1</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
