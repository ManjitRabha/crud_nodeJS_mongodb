const express = require("express");
const router = express.Router();

// BRINGING THE MODELS OR SCHEEMA
let Article = require("../models/article.js");

allArticle = Article.find({});

/* GET home page. */
router.get("/allArticles", (req, res, next) => {
  allArticle.exec((err, data) => {
    if (err) throw err;
    res.render("allArticles.pug", {
      message: "Read Articles in Detail",
      Records: data,
    });
  });
});

module.exports = router;
