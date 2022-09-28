const tags = require("./tags");

module.exports = {
  get: {
    tags: [...tags],
    description: "Get All",
    operationId: "getAllUsers",
    responses: {
      200: {
        description: "Get all users",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/User",
                example: [
                  {
                    id: 2,
                    name: "Jane",
                    surname: "Doe",
                    streams: 2,
                  }
                ]
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
