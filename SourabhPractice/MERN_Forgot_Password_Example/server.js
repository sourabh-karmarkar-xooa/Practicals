"use strict";
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  User = require("./api/models/userModel"),
  bodyParser = require("body-parser");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
var routes = require("./api/routes/todoListRoutes");
routes(app);
app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
app.listen(port);
console.log("forgot password feature server started on: " + port);
module.exports = app;
