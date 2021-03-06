const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Add routes, both API and view
app.use(routes);

//Minor onChange
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Start the API server
app.listen(app.get("port"), function() {
  console.log(`🌎  ==> API Server now listening on PORT ${app.get("port")}!`);
});
