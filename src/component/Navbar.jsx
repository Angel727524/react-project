import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="navbar"> <div className="logo"> <h2>React Portfolio</h2> </div>

  <ul className="nav-links">
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/about">About React</Link>
    </li>

    <li>
      <Link to="/state">State Demo</Link>
    </li>

    <li>
      <Link to="/effect">Effect Demo</Link>
    </li>

    <li>
      <Link to="/storage">Storage Demo</Link>
    </li>

    <li>
      <Link to="/history">Course History</Link>
    </li>

    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
  </ul>
</nav>

);
}

export default Navbar;
