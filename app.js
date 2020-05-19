const express = require("express");
const app = express();
var flash = require("connect-flash");
const path = require("path");
require("dotenv").config();
const mongoUrl = process.env.DATABASE;
const port = process.env.PORT || 3000;

//Body Parser Section
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // bodyParser configuration
app.use(bodyParser.json()); // bodyParser configuration
// Flash message setup
var cookieParser = require("cookie-parser");
app.use(cookieParser());
// Express Session Middleware
var session = require("express-session");
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);


// Express message Middleware
app.use(require("connect-flash")());
app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});



// SERVING STATIC FOLDER AND VIEW ENGINGE
app.use(express.static("public"));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


// Mongoose and Database section or configuration
const mongoose = require("mongoose");
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected.");
});

// ALL ROUTES WILL BE IMPORTED HERE FROM ROUTES FOLDER
// HOME OR INDEX ROUTE BRINGINGING
const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);
// READ all Articles in a Single Page Route
const allArticlesRouter = require("./routes/allArticles.js");
app.use("/", allArticlesRouter);
// ADD new article GET and POST Route
const addArticleRouter = require("./routes/addArticle.js");
app.use("/", addArticleRouter);

// READ Single Article in Detail Route
const oneArticleRouter = require("./routes/oneArticle.js");
app.use("/", oneArticleRouter);
const deleteArticleRouter = require("./routes/deleteArticle.js");
app.use("/", deleteArticleRouter);
// EDIT and UPDATE data Router
const editArticleRouter = require("./routes/editArticle.js");
app.use("/", editArticleRouter);

// SERVER CONFIGURATION HERE

app.listen(port, function () {
  console.log(`Server is listening at Port No... ${port}`);
});
