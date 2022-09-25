const userRouterFactory = require("../router/user.router");

function appFactory() {
  const express = require("express");
  const app = express();

  const userRouter = userRouterFactory();

  app.use("/users", userRouter);

  app.get("/hello", (req, res) => {
    res.send("hello world");
  });

  return app;
}

module.exports = appFactory;