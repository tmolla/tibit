const path = require("path");
const router = require("express").Router();
const tibitRoutes = require("./api/tibits");
const users = require(".//api/users")

// tibit routes
router.use("/api/tibits", tibitRoutes);
router.use("/api/users", users);
// For anything else, render the html page
router.use(function(req, res) {
  console.log('This is the path')
  console.log(path.join(__dirname, "../../client/build/index.html"))
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;