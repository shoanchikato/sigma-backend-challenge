module.exports = {
  components: {
    schemas: {
      StreamRequest: {
        type: "object",
        example: {
          action: "increase",
          streams: 1,
        },
      },
    },
  },
};