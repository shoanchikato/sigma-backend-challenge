function userRouterFactory(userRepo) {
  const express = require("express");
  const router = express.Router();

  router.get("/", async (req, res) => {
    const users = await userRepo.getAll();
    
    res.json(users);
  });

  router.get("/:id", async (req, res) => {
    const { id: idString } = req.params;

    const id = parseInt(idString);

    const user = await userRepo.getById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: `user ${idString} not found` });
    }
  });

  return router;
}

module.exports = userRouterFactory;
