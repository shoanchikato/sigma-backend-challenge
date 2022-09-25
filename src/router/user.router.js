function userRouterFactory() {
  const express = require("express");
  const router = express.Router();

  const users = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
    },
    {
      id: 2,
      name: "Jane",
      surname: "Doe",
    },
    {
      id: 3,
      name: "Jenny",
      surname: "Doe",
    },
  ];

  router.get("/", (req, res) => {
    res.json(users);
  })

  return router;
}

module.exports = userRouterFactory;