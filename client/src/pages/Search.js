import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link, Redirect } from "react-router-dom";
import Results from "./Results";
import API from "../utils/API";

class Search extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    redirectToResults: false
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("clicked");
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.getArticlesFromAPI({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
        .then(res => {
          console.log(res);
          this.setState({ redirectToResults: true });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (!this.state.redirectToResults) {
      return <Redirect to="/results" />;
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>New York Times Search</h1>
            </Jumbotron>
          </Col>
        </Row>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Topic</label>
            <input
              type="text"
              className="form-control"
              name="topic"
              placeholder="Enter A Topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input
              type="text"
              className="form-control"
              name="startYear"
              placeholder="Enter Start Year: YYYYMMDD"
              value={this.state.startYear}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput3"
              name="endYear"
              placeholder="Enter End Year: YYYYMMDD"
              value={this.state.endYear}
              onChange={this.handleInputChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-info"
            disabled={
              !(this.state.topic && this.state.startYear && this.state.endYear)
            }
            value="Submit"
          />{" "}
        </form>
      </Container>
    );
  }
}

export default Search;
