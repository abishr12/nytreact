import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <a href="/" className="navbar-brand">
        Search
      </a>

      <a href="/results" className="navbar-brand">
        Results
      </a>

      <a href="/saved-articles" className="navbar-brand">
        Saved Articles
      </a>
    </div>
  </nav>
);

export default Nav;
