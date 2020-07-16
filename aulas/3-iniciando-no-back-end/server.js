const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.get("/", (req, res) => {
  const about = {
    avatar_url:
      "https://avatars2.githubusercontent.com/u/4925814?s=460&u=96551af1efae9c600457ae388077aa03e18f5b1a&v=4",
    name: "Daury Mendes",
    role: "junior web developer",
    description:
      'Programadora full-stack iniciante com foco em HTML, CSS e JavaScript. Estudante do Bootcamp Launchbase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
    links: [
      { name: "GitHub", url: "https://www.github.com/dauryellen/" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/dauryellen/" },
      { name: "Twitter", url: "https://www.twitter.com/dauryoque/" },
    ],
  };

  return res.render("about", { about });
});

server.get("/portfolio", (req, res) => {
  return res.render("portfolio", { items: videos });
});

server.listen(5000, () => {
  console.log("Server is running.");
});
