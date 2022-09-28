const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../swagger");
const cors = require("cors");
const helmet = require("helmet");

const userRepoFactory = require("../repo/user.repo");
const streamRouterFactory = require("../router/stream.router");
const userRouterFactory = require("../router/user.router");
const streamServiceFactory = require("../service/stream.service");

function appFactory() {
  const express = require("express");
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.disable("x-powered-by");

  const userRepo = userRepoFactory();

  const streamService = streamServiceFactory(userRepo);

  const userRouter = userRouterFactory(userRepo);
  const streamRouter = streamRouterFactory(streamService);

  app.use("/users", userRouter);
  app.use("/streams", streamRouter);
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  return app;
}

module.exports = appFactory;
