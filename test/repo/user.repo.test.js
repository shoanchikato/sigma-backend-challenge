const dbFactory = require("../../src/db");
const populateDb = require("../../src/db/populateDb");
const userRepoFactory = require("../../src/repo/user.repo");

let db = null;
let usersCollection = null;
let userRepo = null;

beforeEach(async () => {
  db = await dbFactory();
  usersCollection = db.collection("users");
  await usersCollection.drop();
  await populateDb(usersCollection);
  userRepo = userRepoFactory(usersCollection);
});

describe("user repo", () => {
  it("should get all users", async () => {
    const users = [
      {
        _id: 1,
        name: "John",
        surname: "Doe",
        streams: 1,
      },
      {
        _id: 2,
        name: "Jane",
        surname: "Doe",
        streams: 2,
      },
      {
        _id: 3,
        name: "Jenny",
        surname: "Doe",
        streams: 3,
      },
    ];

    const usersDB = await userRepo.getAll();

    expect(users).toEqual(usersDB);
  });

  it("should get a user with id of 2", async () => {
    const user = {
      _id: 2,
      name: "Jane",
      surname: "Doe",
      streams: 2,
    };

    const userDB = await userRepo.getById(2);

    expect(userDB).toEqual(user);
  });
});
