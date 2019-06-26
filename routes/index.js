const path = require("path");
const router = require("express").Router();
const tibitRoutes = require("./api/tibits");

// tibit routes
router.use("/api/tibits", tibitRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;