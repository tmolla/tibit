const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Route for both API and View
app.use(routes);

//connect to the Mongo DB via Mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tibit", 
  { 
    useNewUrlParser: true,
    useFindAndModify: false
  }
);
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});