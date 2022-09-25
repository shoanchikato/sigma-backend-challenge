function streamRouterFactory() {
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

  router.put("/:id", (req, res) => {
    const { id: idString } = req.params;

    const id = parseInt(idString);

    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ message: `user ${idString} not found` });
      return;
    }

    const [inc, dec] = ["increase", "decrese"];

    const payload = req.body;

    users.forEach((user) => {
      if (payload.action === inc) {
        user.streams += payload.streams;
      } else if (payload.action === dec) {
        user.streams -= payload.streams;
      } else {
        res.status(400).json({ message: "unknown action" });
        return;
      }
    });

    res.status(200).json(user);
  });

  return router;
}

module.exports = streamRouterFactory;