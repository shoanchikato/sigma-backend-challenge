function streamRouterFactory(streamService) {
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
    const payload = req.body;

    const id = parseInt(idString);

    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ message: `user ${idString} not found` });
      return;
    }

    const newUser = streamService.modifyUserStreams(payload, user);

    res.status(200).json(newUser);
  });

  return router;
}

module.exports = streamRouterFactory;
