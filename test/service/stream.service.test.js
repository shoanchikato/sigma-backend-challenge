const dbFactory = require("../../src/db");
const userRepoFactory = require("../../src/repo/user.repo");
const streamServiceFactory = require("../../src/service/stream.service");
const populateDb = require("../../src/db/populateDb");

let db = null;
let usersCollection = null;
let userRepo = null;
let streamService = null;

beforeEach(async () => {
  db = await dbFactory();
  usersCollection = db.collection("users");
  await usersCollection.drop();
  await populateDb(usersCollection);
  userRepo = userRepoFactory(usersCollection);
  streamService = streamServiceFactory(userRepo);
});

describe("stream service", () => {
  it("should return a user with increased streams by 2", (done) => {
    const id = 1;

    const payload = {
      action: "increase",
      streams: 2,
    };

    streamService
      .modifyUserStreams(id, payload)
      .then((modifiedUser) => {
        expect(modifiedUser).toEqual({
          _id: 1,
          name: "John",
          surname: "Doe",
          streams: 3,
        });
        done();
      })
      .catch(done);
  });

  it("should return error after exceeding stream limit", async () => {
    const id = 1;

    const payload = {
      action: "increase",
      streams: 3,
    };

    await expect(
      streamService.modifyUserStreams(id, payload)
    ).rejects.toThrowError(new Error("excessed streaming limit of 3"));
  });

  it("should return error if streams are below zero", async () => {
    const id = 1;

    const payload = {
      action: "decrease",
      streams: 2,
    };

    await expect(() =>
      streamService.modifyUserStreams(id, payload)
    ).rejects.toThrowError(new Error("streams can't not be less than 0"));
  });

  it("should return error if action is not know", async () => {
    const id = 1;

    const payload = {
      action: "equals",
      streams: 2,
    };

    await expect(() =>
      streamService.modifyUserStreams(id, payload)
    ).rejects.toThrowError(new Error(`'${payload.action}' unknown action`));
  });
});
