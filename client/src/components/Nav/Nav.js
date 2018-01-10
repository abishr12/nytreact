import React from "react";

const Nav = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <a
        href="/"
        onClick={() => props.handlePageChange("Search")}
        className={
          props.currentPage === "Search"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Search
      </a>

      <a
        href="/results"
        className={
          props.currentPage === "Results"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Results
      </a>

      <a
        href="/saved-articles"
        className={
          props.currentPage === "SavedArticles"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Saved Articles
      </a>
    </div>
  </nav>
);

export default Nav;
