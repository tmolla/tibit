const router = require("express").Router();
const tibitController = require("../../controllers/tibitController");

// Matches with "/api/tibits"
//console.log("in route api tibits goint to")
router.route("/")
  .post(tibitController.create);
  //.get(tibitController.findAll)

router.route("/all/:userId")
  .get(tibitController.findAll);

  router.route("/find/?")
  .get(tibitController.search);

// Matches with "/api/tibits/:id"
router.route("/:id")
  .get(tibitController.findById)
  .put(tibitController.update)
  .delete(tibitController.remove);


module.exports = router;