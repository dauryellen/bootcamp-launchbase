const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const courses = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.get("/", (req, res) => {
  return res.render("courses", { courses });
});

server.get("/about", (req, res) => {
  return res.render("about");
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, () => {
  console.log("Server is running.");
});
