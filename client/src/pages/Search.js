import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {}

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
              placeholder="Enter Start Year"
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
              placeholder="Enter End Year"
              value={this.state.endYear}
              onChange={this.handleInputChange}
            />
          </div>

          <a href="/results">
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
              value="Submit"
            />
          </a>
        </form>
      </Container>
    );
  }
}

export default Search;
