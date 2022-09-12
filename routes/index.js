var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
  ];
  res.render("index", { title: "yolo", message: messages });
});
router.get("/hello", function (req, res, next) {
  res.render("hello", { title: "MOTHAFUCKA" });
});
module.exports = router;
