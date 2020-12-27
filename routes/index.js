var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/complete", function (req, res, next) {
  res.render("complete", { title: "Completed" });
});

const routes = [
  { url: "kitchen", title: "Kitchen", js: "kitchen" },
  { url: "tavern", title: "Tavern", js: "tavern" },
  { url: "link", title: "Link", js: "link" },
  { url: "library", title: "Library", js: "library" },
];

routes.forEach((route) => {
  router.get(`/${route.url}`, function (req, res, next) {
    res.render("room", { title: route.title, js: route.js });
  });
});

module.exports = router;
