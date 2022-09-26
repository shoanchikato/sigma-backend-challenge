function userRouterFactory(userRepo) {
  const express = require("express");
  const router = express.Router();

  router.get("/", (req, res) => {
    const users = userRepo.getAll();
    
    res.json(users);
  });

  router.get("/:id", (req, res) => {
    const { id: idString } = req.params;

    const id = parseInt(idString);

    const user = userRepo.getById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: `user ${idString} not found` });
    }
  });

  return router;
}

module.exports = userRouterFactory;
