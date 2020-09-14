var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

const escapeRoomEJS = "room";
router.get("/kitchen", function (req, res, next) {
  res.render(escapeRoomEJS, { title: "Kitchen", js: "kitchen" });
});
router.get("/tavern", function (req, res, next) {
  res.render(escapeRoomEJS, { title: "Tavern", js: "tavern" });
});
router.get("/link", function (req, res, next) {
  res.render(escapeRoomEJS, { title: "Link", js: "link" });
});
router.get("/library", function (req, res, next) {
  res.render(escapeRoomEJS, { title: "Library", js: "library" });
});

module.exports = router;
