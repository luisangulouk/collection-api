// Do this as the first thing so that any code reading it knows the right env.

process.env.BABEL_ENV = "production";

const express = require("express");
const path = require("path");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
    res.send(["home"])
});

app.get("/product", (req, res) => {
    res.send(["product1","product2"])
});

app.get("/profile", (req, res) => {
    res.send(["profile1","profile2"])
});

app.listen(PORT, function () {
  console.log(`Collection API Listening on port ${PORT}!\n`);
});
