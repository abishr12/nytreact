import axios from "axios";

export default {
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

  //Send Search Data
  getArticlesFromAPI: function(articleData) {
    console.log("Grabbing Articles...");
    return axios.post("/api/articles/find", articleData);
  },

  //Retrieve Article Results To Render Results Page
  retrieveArticleResults: function() {
    return axios.get("api/articles/find");
  },

  //Save Articles
  saveArticles: function(articleId) {
    return axios.put("api/articles/find/" + articleId);
  },

  //Render Saved Articles
  retrieveSavedArticles: function() {
    return axios.get("api/articles/saved");
  }
};
