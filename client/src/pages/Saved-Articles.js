import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class SavedArticles extends Component {
  state = {
    articles: [],
    date: "",
    url: ""
  };

  componentDidMount() {
    API.retrieveSavedArticles()
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.article,
          data: "",
          url: ""
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.url}>
                      <strong>{article.title}</strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedArticles;
