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

  it("should return error after exceeding stream limit", () => {
    const streamService = streamServiceFactory();

    const user = {
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    };

    const payload = {
      action: "increase",
      streams: 3,
    };

    expect(() => streamService.modifyUserStreams(payload, user)).toThrowError(
      new Error("excessed streaming limit of 3")
    );
  });

  it("should return error if streams are below zero", () => {
    const streamService = streamServiceFactory();

    const user = {
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    };

    const payload = {
      action: "decrease",
      streams: 2,
    };

    expect(() => streamService.modifyUserStreams(payload, user)).toThrowError(
      new Error("streams can't not be less than 0")
    );
  });
});
