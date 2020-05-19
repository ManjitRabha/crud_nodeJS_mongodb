const express = require("express");
const router = express.Router();

// BRINGING THE MODELS OR SCHEEMA
let Article = require("../models/article.js");

router.get("/oneArticle/:id", function (req, res) {
  Article.findById(req.params.id, function (err, data) {
    if (err) throw err;
    res.status(200).render("oneArticle.pug", {
      title: "Read Your Article in Detail",
      Records: data,
    });
  });
});
module.exports = router;
