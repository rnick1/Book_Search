import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a>
        Google Books
        <Link style={{color: "black", padding: 20}} to={"search"}>Search Books</Link>
        <Link style={{color: "black", padding: 20}} to={"saved"}>Saved Books</Link>
      </a>
    </nav>
  );
}

export default Nav;
