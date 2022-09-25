function appFactory() {
  const express = require("express");
  const app = express();

  app.get("/hello", (req, res) => {
    res.send("hello world");
  });

  return app;
}

module.exports = appFactory;