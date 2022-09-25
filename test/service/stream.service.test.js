const streamRouterFactory = require("../../src/service/stream.service");

describe("stream service", () => {
  it("should return a user with increased streams by 2", () => {
    const streamRouter = streamRouterFactory();

    const user = {
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    };

    const payload = {
      action: "increase",
      streams: 2,
    };

    const modifiedUser = streamRouter.modifyUserStreams(payload, user);

    expect(modifiedUser).toEqual({
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 3,
    });
  });
});
