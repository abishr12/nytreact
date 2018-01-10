import React, { Component } from "react";
import Nav from "../Nav";

class Portfolio extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // renderPage = () => {
  //   if (this.state.currentPage === "Home") {
  //     return <Home />;
  //   } else if (this.state.currentPage === "About") {
  //     return <About />;
  //   } else if (this.state.currentPage === "Blog") {
  //     return <Blog />;
  //   } else {
  //     return <Contact />;
  //   }
  // };

  render() {
    return (
      <div>
        <Nav handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default Portfolio;
