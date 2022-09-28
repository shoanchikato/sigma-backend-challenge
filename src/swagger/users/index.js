const getAll = require("./get-all");
const getById = require("./get-by-id");
const models = require("./models");

module.exports = {
  paths: {
    "/users": {
      ...getAll,
    },
    "/users/{id}": {
      ...getById,
    }
  },
  ...models,
};