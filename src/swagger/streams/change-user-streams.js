const tags = require("./tags");

module.exports = {
  put: {
    tags: [...tags],
    description: "Change number of streams for a user",
    operationId: "changeUserStreams",
    parameters: [{
      name: "id",
      in: "path",
      schema: {
        $ref: "#/components/schemas/UserId",
      },
      required: true,
      description: "A single user id",
    },],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/StreamRequest",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Changed number of user streams successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
              example: {
                id: 2,
                name: "Jane",
                surname: "Doe",
                streams: 2,
              }
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
