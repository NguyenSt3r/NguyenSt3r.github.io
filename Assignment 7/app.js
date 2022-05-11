"use strict";
const express = require("express");
const app = express();
// define endpoint for exercise 1 here
app.get("/math/circle/:r", function (req, res) {
  const area = Math.PI * req.params.r * req.params.r;
  const circumference = Math.PI * (2 * req.params.r);

  res.type("json");
  res.send({ area, circumference });
});

// define endpoint for exercise 2 here
app.get("/hello/name", function (req, res) {
  const first = req.query.first;
  const last = req.query.last;

  if (first && last) {
    res.type("text");
    res.send(`Hello ${first} ${last}`);
  } else {
    res
      .status(400)
      .send(
        `Missing Required GET parameters: ${!first ? "first" : ""}${
          !first && !last ? "," : ""
        } ${!last && "last"}`
      );
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
