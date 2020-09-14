var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  return res.send("respond with a resource");
});

router.get("/test", (req, res) => {
  return res.send("respond with a resource2");
});

module.exports = router;
