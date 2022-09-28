const changeUserStreams = require("./change-user-streams");
const models = require("./models");

module.exports = {
  paths: {
    "/streams/{id}": {
      ...changeUserStreams,
    },
  },
  ...models,
};