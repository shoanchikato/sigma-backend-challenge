const userRepoFactory = require("../../src/repo/user.repo");

let userRepo = null;

beforeEach(() => {
  userRepo = userRepoFactory();
});

describe("user repo", () => {
  it("should get all users", () => {
    const users = [
      {
        id: 1,
        name: "John",
        surname: "Doe",
        streams: 1,
      },
      {
        id: 2,
        name: "Jane",
        surname: "Doe",
        streams: 2,
      },
      {
        id: 3,
        name: "Jenny",
        surname: "Doe",
        streams: 3,
      },
    ];

    const usersDB = userRepo.getAll();

    expect(users).toEqual(usersDB);
  });

  it("should get a user with id of 2", () => {
    const user = {
      id: 2,
      name: "Jane",
      surname: "Doe",
      streams: 2,
    };

    const userDB = userRepo.getById(2);

    expect(user).toEqual(userDB);
  });
});
