const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const conteudos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.get("/", (req, res) => {
  return res.render("sobre");
});

server.get("/conteudos", (req, res) => {
  return res.render("conteudos", { conteudos });
});

server.listen(5000, () => {
  console.log("Server is running.");
});
