const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
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
  //process.env.MONGODB_URI || "mongodb://App:App$Tibit!0625>@ds243607.mlab.com:43607/heroku_rq0hcppc",
  process.env.MONGODB_URI || "mongodb://localhost/tibit", 
  { 
    useNewUrlParser: true,
    useFindAndModify: false
  }
);
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
