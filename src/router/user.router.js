function userRouterFactory() {
  const express = require("express");
  const router = express.Router();

  const users = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    },
    {
      id: 2,
      name: "Jane",
      surname: "Doe",
      streams: 2,
    },
    {
      id: 3,
      name: "Jenny",
      surname: "Doe",
      streams: 3,
    },
  ];

  router.get("/", (req, res) => {
    res.json(users);
  });

  router.get("/:id", (req, res) => {
    const { id: idString } = req.params;

    const id = parseInt(idString);

    const user = users.find((user) => user.id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: `user ${idString} not found` });
    }
  });

  return router;
}

module.exports = userRouterFactory;
