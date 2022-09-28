const tags = require("./tags");

module.exports = {
  get: {
    tags: [...tags],
    description: "Get individual user by id",
    operationId: "getByIdUser",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/UserId",
        },
        required: true,
        description: "A single user id",
      },
    ],
    responses: {
      200: {
        description: "Get a user",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
              example: {
                id: 2,
                name: "Jane",
                surname: "Doe",
                streams: 2,
              },
            },
          },
        },
      },
      404: {
        description: "User not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
              example: {
                error: {
                  message: "user 4 not found",
                },
              },
            },
          },
        },
      },
      500: {
        description: "Server error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
              example: {
                error: {
                  message: "something wrong happend",
                },
              },
            },
          },
        },
      },
    },
  },
};
