const streamServiceFactory = require("../../src/service/stream.service");

describe("stream service", () => {
  it("should return a user with increased streams by 2", () => {
    const streamService = streamServiceFactory();

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

    const modifiedUser = streamService.modifyUserStreams(payload, user);

    expect(modifiedUser).toEqual({
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 3,
    });
  });
});
