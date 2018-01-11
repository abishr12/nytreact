const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String },
  date: { type: String },
  url: String,
  saved: { type: Boolean, default: false }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
