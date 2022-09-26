function streamRouterFactory(userRepo, streamService) {
  const express = require("express");
  const router = express.Router();

  router.put("/:id", (req, res) => {
    const { id: idString } = req.params;
    const payload = req.body;

    const id = parseInt(idString);

    const user = userRepo.getById(id);
    if (!user) {
      res.status(404).json({ message: `user ${idString} not found` });
      return;
    }

    try {
      const newUser = streamService.modifyUserStreams(payload, user);

      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
      return;
    }
  });

  return router;
}

module.exports = streamRouterFactory;
