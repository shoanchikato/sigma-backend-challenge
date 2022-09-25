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

  return app;
}

module.exports = appFactory;