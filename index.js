const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  req.send("hello");
});
app.get("/", (req, res) => {
  req.send("<h1>chai with code</h1>");
});
app.get("/youtube", (req, res) => {
  req.send("<h2>chai </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
