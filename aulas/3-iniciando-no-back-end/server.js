const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.send("Hello! I'm Daury.");
});

server.listen(5000, () => {
  console.log("Server is running.");
});
