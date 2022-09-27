function streamRouterFactory(streamService) {
  const express = require("express");
  const router = express.Router();

  router.put("/:id", async (req, res) => {
    const { id: idString } = req.params;
    const payload = req.body;

    const id = parseInt(idString);

    try {
      const newUser = await streamService.modifyUserStreams(id, payload);

      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);

      if (error.message.includes("not found")) {
        res.status(404).json({ message: error.message });
        return;
      }

      res.status(400).json({ message: error.message });
      return;
    }
  });

  return router;
}

module.exports = streamRouterFactory;
