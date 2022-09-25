const streamRouterFactory = require("../router/stream.router");
const userRouterFactory = require("../router/user.router");
const streamServiceFactory = require("../service/stream.service");

function appFactory() {
  const express = require("express");
  const app = express();

  // body parser
  app.use(express.json());

  const streamService = streamServiceFactory();

  const userRouter = userRouterFactory();
  const streamRouter = streamRouterFactory(streamService);

  app.use("/users", userRouter);
  app.use("/streams", streamRouter);

  app.get("/hello", (req, res) => {
    res.send("hello world");
  });

  return app;
}

module.exports = appFactory;