const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router
  .route("/find")
  .post(articlesController.createAll)
  .get(articlesController.pullArticles);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
