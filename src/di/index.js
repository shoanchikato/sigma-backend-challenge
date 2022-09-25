const streamRouterFactory = require("../router/stream.router");
const userRouterFactory = require("../router/user.router");

function appFactory() {
  const express = require("express");
  const app = express();

  // body parser
  app.use(express.json());

  const userRouter = userRouterFactory();
  const streamRouter = streamRouterFactory();

  app.use("/users", userRouter);
  app.use("/streams", streamRouter);

  app.get("/hello", (req, res) => {
    res.send("hello world");
  });

  return app;
}

module.exports = appFactory;