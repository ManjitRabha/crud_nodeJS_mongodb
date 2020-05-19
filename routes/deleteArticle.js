const express = require("express");
const router = express.Router();

// BRINGING THE MODELS OR SCHEEMA
let Article = require("../models/article.js");

router.get("/deleteArticle/:id", function (req, res) {
  let id = req.params.id;
  let del = Article.findByIdAndDelete(id);
  del.exec(function (err, deletedData) {
    console.log("This data has been deleted" + deletedData);
    if (err) throw err;
    req.flash('danger','Article has been deleted')
    res.redirect("/allArticles");
  });
});
module.exports = router;
