const db = require("../models");
var request = require("request");
const ObjectId = require("mongodb").ObjectID;

// Defining methods for the booksController
module.exports = {
  //Retrieve Search Results From NYT API
  createAll: function(req, res) {
    console.log("*".repeat(100));
    console.log(req.body);

    //Emptying The Database Before Retrieving The Search
    db.Article.remove({ saved: false }).then(() => {
      console.log("DB Emptied");
    });
    request.get(
      {
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          "api-key": "a242a14e2dc34c8283afbc9a8c886b63",
          q: req.body.topic,
          begin_date: req.body.startYear,
          end_date: req.body.endYear
        }
      },
      function(err, response, body) {
        console.log("*".repeat(100));
        body = JSON.parse(body);
        console.log(body.response.docs);
        let newsArticle = body.response.docs.forEach(article => {
          db.Article.create({
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
          });
        });
      }
    );
  },

  //Pull Articles From MongoDB
  pullArticles: function(req, res) {
    console.log("*".repeat(100));
    console.log("Inside Pull Articles");
    console.log("*".repeat(100));

    db.Article.find({ saved: false })
      .limit(20)
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        var hbsObject = {
          article: dbArticle
        };
        //console.log(hbsObject);
        res.send(hbsObject);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },

  // Save Article

  saveArticles: function(req, res) {
    articleId = req.params.id;
    console.log("*".repeat(100));
    console.log("Inside Saved Articles");
    db.Article.update(
      { _id: ObjectId(articleId) },
      { $set: { saved: true } },
      () => {
        db.Article.find({ _id: ObjectId(articleId) })
          .then(response => console.log(response))
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      }
    );
  },

  //Grab Saved Articles

  getSavedArticles: function(req, res) {
    db.Article.find({ saved: true })
      .limit(20)
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        var hbsObject = {
          article: dbArticle
        };
        //console.log(hbsObject);
        res.send(hbsObject);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  }
};
