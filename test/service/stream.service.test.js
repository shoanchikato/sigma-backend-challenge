const userRepoFactory = require("../../src/repo/user.repo");
const streamServiceFactory = require("../../src/service/stream.service");

let userRepo = null;
let streamService = null;

beforeEach(() => {
  userRepo = userRepoFactory();
  streamService = streamServiceFactory(userRepo);
});

describe("stream service", () => {
  it("should return a user with increased streams by 2", () => {
    const id = 1;

    const payload = {
      action: "increase",
      streams: 2,
    };

    const modifiedUser = streamService.modifyUserStreams(id, payload);

    expect(modifiedUser).toEqual({
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 3,
    });
  });

  it("should return error after exceeding stream limit", () => {
    const id = 1;

    const payload = {
      action: "increase",
      streams: 3,
    };

    expect(() => streamService.modifyUserStreams(id, payload)).toThrowError(
      new Error("excessed streaming limit of 3")
    );
  });

  it("should return error if streams are below zero", () => {
    const id = 1;

    const payload = {
      action: "decrease",
      streams: 2,
    };

    expect(() => streamService.modifyUserStreams(id, payload)).toThrowError(
      new Error("streams can't not be less than 0")
    );
  });

  it("should return error if action is not know", () => {
    const id = 1;

    const payload = {
      action: "equals",
      streams: 2,
    };

    expect(() => streamService.modifyUserStreams(id, payload)).toThrowError(
      new Error(`'${payload.action}' unknown action`)
    );
  });
});
