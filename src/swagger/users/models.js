module.exports = {
  components: {
    schemas: {
      UserId: {
        type: "string",
        description: "user identifier",
        example: "2",
      },
      User: {
        type: "object",
        example: {
          id: "2",
          name: "John",
          surnmae: "Doe",
          streams: 1,
        },
      },
      Error: {
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};
