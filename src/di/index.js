const dbFactory = require("../db");
const populateDb = require("../db/populateDb");
const userRepoFactory = require("../repo/user.repo");
const streamRouterFactory = require("../router/stream.router");
const userRouterFactory = require("../router/user.router");
const streamServiceFactory = require("../service/stream.service");

async function appFactory() {
  const express = require("express");
  const app = express();

  // body parser
  app.use(express.json());

  const db = await dbFactory();
  const usersCollection = db.collection("users");
  await populateDb(usersCollection);

  const userRepo = userRepoFactory(usersCollection);

  const streamService = streamServiceFactory(userRepo);

  const userRouter = userRouterFactory(userRepo);
  const streamRouter = streamRouterFactory(streamService);

  app.use("/users", userRouter);
  app.use("/streams", streamRouter);

  return app;
}

module.exports = appFactory;
