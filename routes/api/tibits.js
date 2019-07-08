const router = require("express").Router();
const tibitController = require("../../controllers/tibitController");

// Matches with "/api/tibits"
//console.log("in route api tibits goint to")
router.route("/")
  .get(tibitController.findAll)
  .post(tibitController.create);

// Matches with "/api/tibits/:id"
router
  .route("/:id")
  .get(tibitController.findById)
  .put(tibitController.update)
  .delete(tibitController.remove);

router
  .route("/find/:phrase")
  .get(tibitController.search);

module.exports = router;