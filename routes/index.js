var express = require("express");
var router = express.Router();

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
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", message: messages });
});
router.get("/hello", function (req, res, next) {
  res.render("hello", { title: "Hello" });
});
router.get("/new", (req, res, next) => {
  res.render("new", { title: "NEW" });
});
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
