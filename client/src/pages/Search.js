import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import Results from "./Results";

class Search extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    return <Results />;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>New York Times Search</h1>
            </Jumbotron>
          </Col>
        </Row>
        <form>
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
          <Link to="/results" activeClassName="active">
            <input
              type="submit"
              className="btn btn-info"
              disabled={
                !(
                  this.state.topic &&
                  this.state.startYear &&
                  this.state.endYear
                )
              }
              onClick={this.handleFormSubmit}
              value="Submit"
            />{" "}
          </Link>
        </form>
      </Container>
    );
  }
}

export default Search;
