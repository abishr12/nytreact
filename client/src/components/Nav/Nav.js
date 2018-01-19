import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <Link
        to="/"
        onClick={() => props.handlePageChange("Search")}
        className={
          props.currentPage === "Search"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Search
      </Link>

      <Link
        to="/results"
        className={
          props.currentPage === "Results"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Results
      </Link>

      <Link
        to="/saved-articles"
        className={
          props.currentPage === "SavedArticles"
            ? "navbar-brand active"
            : "navbar-brand"
        }
      >
        Saved Articles
      </Link>
    </div>
  </nav>
);

export default Nav;
