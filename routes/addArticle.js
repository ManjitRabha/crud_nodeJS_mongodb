const express = require("express");
const router = express.Router();

// BRINGING THE MODELS OR SCHEEMA
let Article = require("../models/article.js");
// // In add article route there will be two route one is GET and one is Post,
//  in GET route we will fetch the form and by POST will send the data to the DATABASE

router.get("/addArticle", (req, res) => {
  res.render("addArticle.pug", { msg: "Add new Article" });
});

// Submit Form or DATA to Databasi
router.post("/addArticle", (req, res, next) => {
  let nArticle = new Article();
  nArticle.title = req.body.title;
  nArticle.author = req.body.author;
  nArticle.body = req.body.body;
  nArticle.save((err, response) => {
    if (err) throw err;
    req.flash('success', "Article has been added to Database")
    res.redirect("/allArticles");
  });
});

module.exports = router;
