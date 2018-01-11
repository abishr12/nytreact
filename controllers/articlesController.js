const db = require("../models");
var request = require("request");

// Defining methods for the booksController
module.exports = {
  //Display all article in results page
  createAll: function(req, res) {
    console.log("Hello");
    console.log(req.body);
    // request.get(
    //   {
    //     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    //     qs: {
    //       "api-key": "a242a14e2dc34c8283afbc9a8c886b63",
    //       q: req.body.topic,
    //       begin_date: req.body.startYear,
    //       end_date: req.body.endYear
    //     }
    //   },
    //   function(err, response, body) {
    //     body = JSON.parse(body);
    //     console.log(body);
    //   }
    // );
    // db.Article.find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }

  // Save Article

  // save: function(req, res) {
  //   db.Article.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  // update: function(req, res) {
  //   db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
