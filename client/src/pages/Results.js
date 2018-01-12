import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Results extends Component {
  //Load all articles for display
  componentDidMount() {
    API.retrieveArticleResults()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
          </Col>
        </Row>

        {/* <Row>
          <Col size="md-12">
            {this.state.books.length ? (
          <List>
          {this.state.books.map(book => (
          <ListItem key={book._id}>
          <strong>
          {book.title} by {book.author}
          </strong>

          <SaveBtn onClick={() => this.deleteBook(book._id)} />
          </ListItem>
          ))}
          </List>
            ) : (
          <h3>No Results to Display</h3>
            )}
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Results;
