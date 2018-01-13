import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Results extends Component {
  state = {
    articles: [],
    date: "",
    url: ""
  };
  //Load all articles for display
  componentDidMount() {
    API.retrieveArticleResults()
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

  shouldSave(articleId) {
    let savedArticle = document.getElementById(articleId);
    savedArticle.classList.remove("btn-secondary");
    savedArticle.classList.add("btn-primary");
    savedArticle.innerHTML = "Save It?";
  }
  saveArticle(articleId) {
    console.log(`Article ${articleId} has been saved`);
    let savedArticle = document.getElementById(articleId);

    savedArticle.classList.remove("btn-secondary");
    savedArticle.innerHTML = "Saved";
    savedArticle.classList.add("btn-success");

    API.saveArticles(articleId)
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

        <Row>
          <Col size="md-12">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.url}>
                      <strong>{article.title}</strong>
                    </a>

                    <SaveBtn
                      id={article._id}
                      onMouseOver={() => this.shouldSave(article._id)}
                      onClick={() => this.saveArticle(article._id)}
                    />
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

export default Results;
