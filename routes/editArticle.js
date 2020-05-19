const express = require("express");
const router = express.Router();

// BRINGING THE MODELS OR SCHEEMA
let Article = require("../models/article.js");
// router.get("/editArticle/:id", (req, res) => {
//   let id = req.params.id;
//   Article.findById(id, (err, data) => {
//     if (err) throw err;
//     res.render("edit", {
//       title: "Edit Your Article",
//       Records: data,
//     });
//   });
// });
// Testing again above lines
router.get("/editArticle/:id", function (req, res) {
  let id = req.params.id;
  let edit = Article.findById(id);

  edit.exec((err, data) => {
    if (err) throw err;
    res.render("edit", { title: "Edit Your Article", Records: data });
  });
});

// UPDATE data to the Database
//Type POST
router.post("/updateArticle/:id", (req, res) => {
  let article = {};
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  let query = { _id: req.params.id };

  Article.updateOne(query, article, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});
module.exports = router;
