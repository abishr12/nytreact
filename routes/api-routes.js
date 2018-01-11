const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

router.route("/api/find-articles").post(articlesController.createAll);
// .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
